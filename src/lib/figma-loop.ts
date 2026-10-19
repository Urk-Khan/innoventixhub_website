/**
 * Plays Figma keyframe loops (the `motionDev` snippets from get_motion_context) with the
 * Web Animations API, so the custom easings, times and durations are used as exported.
 * Only opacity, translate and scale are animated (compositor-friendly).
 */
type Track = { values: number[]; times: number[]; ease: string[]; duration: number };
export type LoopSpec = Partial<Record<"opacity" | "y" | "x" | "scale" | "scaleX" | "scaleY", Track>>;

const EASE: Record<string, string> = {
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: "cubic-bezier(.55,0,1,.45)",
  circOut: "cubic-bezier(0,.55,.45,1)",
  circInOut: "cubic-bezier(.85,0,.15,1)",
  backIn: "cubic-bezier(.36,0,.66,-.56)",
  backOut: "cubic-bezier(.34,1.56,.64,1)",
  backInOut: "cubic-bezier(.68,-.6,.32,1.6)",
};

const nums = (text: string) => text.split(",").map((part) => Number(part.trim())).filter((n) => !Number.isNaN(n));

export function parseSnippet(snippet: string): LoopSpec {
  const animate = snippet.match(/animate=\{\{([\s\S]*?)\}\}\s+transition=/)?.[1] ?? "";
  const transition = snippet.match(/transition=\{\{([\s\S]*)\}\}\s*\/>/)?.[1] ?? "";
  const spec: LoopSpec = {};
  for (const match of animate.matchAll(/(\w+):\s*\[([^\]]*)\]/g)) {
    const prop = match[1] as keyof LoopSpec;
    const values = nums(match[2]);
    const block = transition.match(new RegExp(`${prop}:\\s*\\{([^}]*)\\}`))?.[1] ?? "";
    const duration = Number(block.match(/duration:\s*([\d.]+)/)?.[1] ?? 1);
    const times = nums(block.match(/times:\s*\[([^\]]*)\]/)?.[1] ?? "");
    const easeRaw = block.match(/ease:\s*(\[[^\]]*\]|"[^"]*")/)?.[1] ?? '"easeInOut"';
    const ease = (easeRaw.startsWith("[") ? easeRaw.slice(1, -1).split(",") : [easeRaw]).map((name) => EASE[name.replace(/["\s]/g, "")] ?? "ease-in-out");
    if (values.length && times.length === values.length) spec[prop] = { values, times, ease, duration };
  }
  return spec;
}

function keyframesFor(prop: keyof LoopSpec, track: Track): Keyframe[] {
  return track.values.map((value, index) => {
    const frame: Keyframe = { offset: track.times[index] };
    const ease = track.ease[Math.min(index, track.ease.length - 1)];
    if (index < track.values.length - 1) frame.easing = ease;
    if (prop === "opacity") frame.opacity = value;
    else if (prop === "y") frame.translate = `0 ${value}px`;
    else if (prop === "x") frame.translate = `${value}px 0`;
    else if (prop === "scaleY") frame.scale = `1 ${value}`;
    else if (prop === "scaleX") frame.scale = `${value} 1`;
    else frame.scale = `${value}`;
    return frame;
  });
}

export function buildLoop(el: Element, snippet: string): Animation[] {
  const spec = parseSnippet(snippet);
  return (Object.keys(spec) as (keyof LoopSpec)[]).map((prop) => {
    const track = spec[prop]!;
    const animation = el.animate(keyframesFor(prop, track), { duration: track.duration * 1000, iterations: Infinity, fill: "both" });
    animation.pause();
    return animation;
  });
}
