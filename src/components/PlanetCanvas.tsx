// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

const ASSET_BASE_URL = "https://api.getlayers.ai/storage/v1/object/public/public/assets/ascend-d9857ad1f2";
const PLANET_GLB = `${ASSET_BASE_URL}/planet.glb`;
const PLANET_LIGHTS_GLB = `${ASSET_BASE_URL}/planet-lights.glb`;
const PLANET_CLOUDS_PNG = `${ASSET_BASE_URL}/planet-clouds.png`;
const DRACO_PATH = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";

const CONFIG = {
  rimColor: "#c1faff", rimPower: 2.4, nightLights: 10, terrainDepth: 0.33, terrainShade: 1.3,
  oceanGlint: 0.45, oceanDeep: 0.12, oceanFlow: 3, oceanFlowSpeed: 0.8, oceanFlowScale: 2.1,
  glowColor: "#3a6cff", glowIntensity: 3.35, planetRadius: 1.95, spin: 0.03, initRotation: 2.07,
  tilt: 0.37, autoRotate: 0,
  cloud1Height: 1.005, cloud1Opacity: 0.6, cloud1Spin: 0.06,
  cloud2Height: 1.03, cloud2Opacity: 0.5, cloud2Spin: 0.14,
  cloud3Height: 1.075, cloud3Opacity: 0.5, cloud3Spin: 0.1,
  bgColor: "#040a1e", flameColor: "#3a6cff", flameColor2: "#c1faff", flameAmt: 0.15,
  atmoColor: "#9fc4ff", atmoCount: 320, atmoSize: 22, atmoSpeed: 0.8,
  starColor: "#cfe0ff", starCount: 1400, starSize: 1.6, starFlicker: 1,
  markerColor: "#ffd27a", markerCount: 60, markerSize: 16, markerSpeed: 0.5,
};
const LAYERS = { NONE: 0, TORUS_SCENE: 1, BLOOM_SCENE: 2, ENTIRE_SCENE: 3 };

const Lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const STOPS_X = [{ p: 0, v: 0 }, { p: 0.32, v: -3.1 }, { p: 0.64, v: 3.2 }, { p: 1, v: 0 }];
const STOPS_Y = [{ p: 0, v: -4.5 }, { p: 0.32, v: 0.55 }, { p: 0.64, v: 0.45 }, { p: 1, v: 0.15 }];
const STOPS_S = [{ p: 0, v: 2.15 }, { p: 0.32, v: 1.0 }, { p: 0.64, v: 0.92 }, { p: 1, v: 1.12 }];

function sample(stops, p) {
  if (p <= stops[0].p) return stops[0].v;
  for (let i = 1; i < stops.length; i++) {
    if (p <= stops[i].p) {
      const a = stops[i - 1];
      const b = stops[i];
      let t = (p - a.p) / (b.p - a.p);
      t = t * t * (3 - 2 * t);
      return Lerp(a.v, b.v, t);
    }
  }
  return stops[stops.length - 1].v;
}

const SNOISE = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

export default function PlanetCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let disposed = false;
    let raf = 0;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { EffectComposer } = await import("three/examples/jsm/postprocessing/EffectComposer.js");
      const { RenderPass } = await import("three/examples/jsm/postprocessing/RenderPass.js");
      const { UnrealBloomPass } = await import("three/examples/jsm/postprocessing/UnrealBloomPass.js");
      const { ShaderPass } = await import("three/examples/jsm/postprocessing/ShaderPass.js");
      const { GammaCorrectionShader } = await import("three/examples/jsm/shaders/GammaCorrectionShader.js");
      const { CopyShader } = await import("three/examples/jsm/shaders/CopyShader.js");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      if (disposed) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hexToVec3 = (hex) => {
        const c = new THREE.Color(hex);
        return new THREE.Vector3(c.r, c.g, c.b);
      };
      const hexRaw = (hex) => {
        const n = parseInt(hex.slice(1), 16);
        return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
      };

      let w = window.innerWidth;
      let h = window.innerHeight;
      const pr = Math.min(window.devicePixelRatio || 1, 2);

      let renderer;
      try {
        renderer = new THREE.WebGL1Renderer({ canvas, antialias: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.VSMShadowMap;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 200);
      camera.position.set(0, 0, 8);
      camera.layers.enable(LAYERS.TORUS_SCENE);
      camera.layers.enable(LAYERS.BLOOM_SCENE);
      camera.layers.enable(LAYERS.ENTIRE_SCENE);
      scene.add(camera);

      const ambient = new THREE.AmbientLight(0xffffff, 1.8);
      ambient.layers.set(LAYERS.ENTIRE_SCENE);
      scene.add(ambient);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(0, 10, 2);
      dir.layers.set(LAYERS.ENTIRE_SCENE);
      scene.add(dir);

      const onlyEntire = (obj) => obj.traverse((o) => o.layers.set(LAYERS.ENTIRE_SCENE));

      // ---------- Composers ----------
      const torusComposer = new EffectComposer(renderer);
      torusComposer.renderToScreen = false;
      torusComposer.addPass(new RenderPass(scene, camera));
      torusComposer.addPass(new ShaderPass(GammaCorrectionShader));
      torusComposer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.22, 0.2, 0));
      torusComposer.addPass(new ShaderPass(CopyShader));

      const bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      bloomComposer.addPass(new RenderPass(scene, camera));
      bloomComposer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.5, 0.6, 0));
      bloomComposer.addPass(new ShaderPass(GammaCorrectionShader));

      const FinalPass = {
        uniforms: {
          iTime: { value: 0 }, tDiffuse: { value: null }, torusTexture: { value: null }, bloomTexture: { value: null }, haloTexture: { value: null },
          uBg: { value: hexToVec3(CONFIG.bgColor) }, uFlameA: { value: hexToVec3(CONFIG.flameColor) },
          uFlameB: { value: hexToVec3(CONFIG.flameColor2) }, uFlameAmt: { value: CONFIG.flameAmt },
        },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`,
        fragmentShader: `
    uniform float iTime; uniform sampler2D tDiffuse; uniform sampler2D bloomTexture; uniform sampler2D torusTexture; uniform sampler2D haloTexture;
    uniform vec3 uBg; uniform vec3 uFlameA; uniform vec3 uFlameB; uniform float uFlameAmt;
    varying vec2 vUv;
    vec3 warp3d(vec3 pos, float t){ float curv=.8,a=1.9,b=0.7; pos*=2.;
      pos.x+=curv*sin(t+a*pos.y)+t*b; pos.y+=curv*cos(t+a*pos.x);
      pos.y+=curv*sin(t+a*pos.z)+t*b; pos.z+=curv*cos(t+a*pos.y);
      pos.z+=curv*sin(t+a*pos.x)+t*b; pos.x+=curv*cos(t+a*pos.z);
      return 0.5+0.5*cos(pos.xyz+vec3(1,2,4)); }
    void main(){
      vec2 uv = 2.*vUv - 1.;
      vec3 w = pow(warp3d(vec3(uv.x, sin(uv.y), uv.y), iTime*1.5), vec3(1.5));
      vec3 flame = 1.5*uFlameA*w.x; flame*=w.y; flame += uFlameB*w.z;
      flame *= smoothstep(0.25, 1., abs(uv.y));
      float md = smoothstep(-0.7, 1., -uv.y*uv.x); flame *= md*md;
      vec3 bg = uBg * (1.0 - 0.4 * length(uv));
      vec3 halo = texture2D(haloTexture, vUv).xyz;
      gl_FragColor = vec4(bg + flame*uFlameAmt + texture2D(bloomTexture, vUv).xyz + texture2D(torusTexture, vUv).xyz + texture2D(tDiffuse, vUv).xyz + halo, 1.);
    }`,
      };
      const finalComposer = new EffectComposer(renderer);
      finalComposer.addPass(new RenderPass(scene, camera));
      const finalPass = new ShaderPass(FinalPass);
      finalPass.uniforms.bloomTexture.value = bloomComposer.renderTarget1.texture;
      finalPass.uniforms.torusTexture.value = torusComposer.renderTarget1.texture;
      finalComposer.addPass(finalPass);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.enablePan = false;
      controls.enabled = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = CONFIG.autoRotate;
      controls.minDistance = 3.5;
      controls.maxDistance = 16;
      controls.target.set(0, 0, 0);

      // ---------- Groups ----------
      const worldGroup = new THREE.Group();
      worldGroup.position.set(STOPS_X[0].v, STOPS_Y[0].v, 0);
      worldGroup.scale.setScalar(STOPS_S[0].v);
      scene.add(worldGroup);
      const planetGroup = new THREE.Group();
      planetGroup.rotation.z = CONFIG.tilt;
      worldGroup.add(planetGroup);
      const cloudGroup = new THREE.Group();
      cloudGroup.rotation.z = CONFIG.tilt;
      cloudGroup.visible = false;
      worldGroup.add(cloudGroup);

      // ---------- Atmosphere halo ----------
      const glowMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
          uniforms: { uGlow: { value: hexToVec3(CONFIG.glowColor) }, uIntensity: { value: CONFIG.glowIntensity } },
          vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
          fragmentShader: `
uniform vec3 uGlow; uniform float uIntensity; varying vec2 vUv;
void main(){
  float d = length(vUv - 0.5) * 2.0;
  float a = pow(clamp(1.0 - d, 0.0, 1.0), 2.2);
  gl_FragColor = vec4(uGlow * a * uIntensity, a);
}`,
        })
      );
      glowMesh.scale.setScalar(CONFIG.planetRadius * 2.3);
      onlyEntire(glowMesh);
      worldGroup.add(glowMesh);

      // ---------- Time ----------
      const planetTime = { value: 0 };
      const cloudTime = { value: 0 };
      const starTime = { value: 0 };
      const markerTime = { value: 0 };
      const uRes = { value: new THREE.Vector2(w * pr, h * pr) };

      // ---------- Clouds ----------
      const cloudTex = new THREE.TextureLoader().load(PLANET_CLOUDS_PNG);
      cloudTex.wrapS = cloudTex.wrapT = THREE.RepeatWrapping;
      cloudTex.repeat.set(5, 5);
      const cloudDefs = [
        { h: CONFIG.cloud1Height, o: CONFIG.cloud1Opacity, s: "cloud1Spin", ry: 0.0, phase: 0.0 },
        { h: CONFIG.cloud2Height, o: CONFIG.cloud2Opacity, s: "cloud2Spin", ry: 2.2, phase: 13.0 },
        { h: CONFIG.cloud3Height, o: CONFIG.cloud3Opacity, s: "cloud3Spin", ry: 4.3, phase: 27.0 },
      ];
      const cloudMeshes = cloudDefs.map((layer) => {
        const mat = new THREE.MeshStandardMaterial({ map: cloudTex, transparent: true, depthWrite: false });
        mat.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = cloudTime;
          shader.uniforms.noiseScale = { value: 20 };
          shader.uniforms.uSpeedX = { value: 1 };
          shader.uniforms.uSpeedY = { value: 2 };
          shader.uniforms.uSpeedZ = { value: 2 };
          shader.uniforms.uOpacity = { value: layer.o };
          shader.uniforms.uPhase = { value: layer.phase };
          shader.vertexShader = "varying vec2 vCloudUv;\n" + shader.vertexShader.replace("void main() {", "void main() {\n vCloudUv = uv;");
          shader.fragmentShader =
            `uniform float uTime; uniform float noiseScale; uniform float uSpeedX; uniform float uSpeedY; uniform float uSpeedZ; uniform float uOpacity; uniform float uPhase; varying vec2 vCloudUv;\n${SNOISE}\n` +
            shader.fragmentShader.replace(
              "#include <dithering_fragment>",
              `#include <dithering_fragment>
gl_FragColor.rgb = vec3(1.0);
float cloudNoise = snoise(vec3(vCloudUv.x * noiseScale + uTime * uSpeedX + uPhase, vCloudUv.y * noiseScale - uTime * uSpeedY + uPhase, uTime * uSpeedZ + uPhase));
float cloudNdv = max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0);
float cloudEdge = pow(1.0 - cloudNdv, 3.0);
float cloudMod = mix(cloudNoise, 1.0, cloudEdge);
float cloudNdl = dot(normalize(vNormal), normalize(vec3(-0.9, 0.18, 0.4)));
float cloudDay = 1.0 - smoothstep(0.30, -0.30, cloudNdl) * 0.9;
gl_FragColor.a *= cloudMod * uOpacity * cloudDay;`
            );
        };
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(CONFIG.planetRadius * layer.h, 64, 64), mat);
        mesh.rotation.y = layer.ry;
        mesh.renderOrder = 2;
        mesh.userData.spin = layer.s;
        onlyEntire(mesh);
        cloudGroup.add(mesh);
        return mesh;
      });

      // ---------- Motes ----------
      {
        const n = CONFIG.atmoCount;
        const pos = new Float32Array(n * 3);
        const size = new Float32Array(n);
        const seed = new Float32Array(n);
        for (let i = 0; i < n; i++) {
          pos[i * 3] = Math.random() * 2 - 1;
          pos[i * 3 + 1] = Math.random() * 2 - 1;
          pos[i * 3 + 2] = Math.random() * 2 - 1;
          size[i] = CONFIG.atmoSize * (0.4 + Math.random());
          seed[i] = Math.random() * 100;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("size", new THREE.BufferAttribute(size, 1));
        geo.setAttribute("seed", new THREE.BufferAttribute(seed, 1));
        const mat = new THREE.ShaderMaterial({
          transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false,
          uniforms: { uTime: { value: 0 }, uRes, uColor: { value: hexToVec3(CONFIG.atmoColor) } },
          vertexShader: `
attribute float size; attribute float seed; uniform float uTime; uniform vec2 uRes;
varying float vA;
vec3 warp(vec3 p, float t){ float c=0.9,a=1.9,b=0.02,s=0.05; p*=2.;
  p.x+=c*sin(s*t+a*p.y)+t*b; p.y+=c*cos(s*t+a*p.x); p.y+=c*sin(s*t+a*p.z)+t*b;
  p.z+=c*cos(s*t+a*p.y); p.z+=c*sin(s*t+a*p.x)+t*b; p.x+=c*cos(s*t+a*p.z);
  return cos(p+vec3(1,2,4)); }
void main(){
  vec3 v = position*4.0 + warp(position, uTime)*1.2;
  vec4 mv = modelViewMatrix * vec4(v, 1.0);
  float r = length(v); float farF = 1.0 - smoothstep(5.0, 6.5, r); float nearF = smoothstep(0.0, 0.5, -mv.z);
  vA = farF * nearF;
  gl_PointSize = size * uRes.y / 900.0 / -mv.z; gl_PointSize = max(gl_PointSize, 1.0);
  gl_Position = projectionMatrix * mv;
}`,
          fragmentShader: `
uniform vec3 uColor; varying float vA;
void main(){ vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
  float tex = smoothstep(0.5, 0.0, l); gl_FragColor = vec4(uColor * tex, tex * vA * 0.55); }`,
        });
        const motes = new THREE.Points(geo, mat);
        motes.frustumCulled = false;
        motes.onBeforeRender = () => {
          const perfNow = performance.now() / 1000;
          mat.uniforms.uTime.value = perfNow * CONFIG.atmoSpeed * 8;
          motes.position.copy(camera.position);
          finalPass.uniforms.iTime.value = perfNow * CONFIG.atmoSpeed;
        };
        onlyEntire(motes);
        scene.add(motes);
      }

      // ---------- Starfield ----------
      {
        const n = CONFIG.starCount;
        const pos = new Float32Array(n * 3);
        const seed = new Float32Array(n);
        const bright = new Float32Array(n);
        for (let i = 0; i < n; i++) {
          const u = Math.random() * 2 - 1;
          const t = Math.random() * Math.PI * 2;
          const r = Math.sqrt(1 - u * u);
          pos[i * 3] = 90 * r * Math.cos(t);
          pos[i * 3 + 1] = 90 * u;
          pos[i * 3 + 2] = 90 * r * Math.sin(t);
          seed[i] = Math.random() * 100;
          bright[i] = 0.35 + Math.random() * 0.65;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("seed", new THREE.BufferAttribute(seed, 1));
        geo.setAttribute("bright", new THREE.BufferAttribute(bright, 1));
        const mat = new THREE.ShaderMaterial({
          transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true,
          uniforms: { uTime: starTime, uSize: { value: CONFIG.starSize }, uFlicker: { value: CONFIG.starFlicker }, uColor: { value: hexToVec3(CONFIG.starColor) }, uRes },
          vertexShader: `
attribute float seed; attribute float bright;
uniform float uTime; uniform float uSize; uniform float uFlicker; uniform vec2 uRes;
varying float vTw;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float tw = 0.6 + 0.4 * sin(uTime * uFlicker + seed);
  vTw = bright * tw;
  gl_PointSize = max(uSize * uRes.y / 900.0 * (90.0 / max(-mv.z, 1.0)), 1.0);
  gl_Position = projectionMatrix * mv;
}`,
          fragmentShader: `
uniform vec3 uColor; varying float vTw;
void main(){
  vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
  float core = smoothstep(0.5, 0.0, l);
  gl_FragColor = vec4(uColor, core * vTw);
}`,
        });
        const stars = new THREE.Points(geo, mat);
        stars.frustumCulled = false;
        onlyEntire(stars);
        scene.add(stars);
      }

      // ---------- Planet load ----------
      let planetReady = false;
      let entryT = 0;
      const ENTRY_DUR = 1.9;
      const ENTRY_START_Y = -6.5;

      const draco = new DRACOLoader();
      draco.setDecoderPath(DRACO_PATH);
      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(draco);
      const firstMesh = (root) => {
        let found = null;
        root.traverse((o) => {
          if (!found && o.isMesh) found = o;
        });
        return found;
      };

      const buildMarkers = (mesh) => {
        const map = mesh.material.map;
        const img = map && map.image;
        if (!img) return;
        const cw = img.width || img.videoWidth;
        const ch = img.height || img.videoHeight;
        const cv = document.createElement("canvas");
        cv.width = cw;
        cv.height = ch;
        const ctx = cv.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        let data;
        try {
          data = ctx.getImageData(0, 0, cw, ch).data;
        } catch {
          return;
        }
        const geo = mesh.geometry;
        const posA = geo.attributes.position;
        const uvA = geo.attributes.uv;
        if (!uvA) return;
        const index = geo.index;
        const triCount = (index ? index.count : posA.count) / 3;
        const idx = (t, k) => (index ? index.getX(t * 3 + k) : t * 3 + k);
        const cum = new Float32Array(triCount);
        const va = new THREE.Vector3(), vb = new THREE.Vector3(), vc = new THREE.Vector3();
        const e1 = new THREE.Vector3(), e2 = new THREE.Vector3();
        let total = 0;
        for (let t = 0; t < triCount; t++) {
          va.fromBufferAttribute(posA, idx(t, 0));
          vb.fromBufferAttribute(posA, idx(t, 1));
          vc.fromBufferAttribute(posA, idx(t, 2));
          e1.subVectors(vb, va);
          e2.subVectors(vc, va);
          total += e1.cross(e2).length() * 0.5;
          cum[t] = total;
        }
        const pts = [];
        const seeds = [];
        let tries = 0;
        while (pts.length < CONFIG.markerCount * 3 && tries < CONFIG.markerCount * 80) {
          tries++;
          const r = Math.random() * total;
          let lo = 0, hi = triCount - 1;
          while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (cum[mid] < r) lo = mid + 1;
            else hi = mid;
          }
          const i0 = idx(lo, 0), i1 = idx(lo, 1), i2 = idx(lo, 2);
          let a = Math.random(), b = Math.random();
          if (a + b > 1) { a = 1 - a; b = 1 - b; }
          const c = 1 - a - b;
          const u = uvA.getX(i0) * c + uvA.getX(i1) * a + uvA.getX(i2) * b;
          const v = uvA.getY(i0) * c + uvA.getY(i1) * a + uvA.getY(i2) * b;
          const px = clamp(Math.floor(u * cw), 0, cw - 1);
          const py = clamp(Math.floor((1 - v) * ch), 0, ch - 1);
          const o = (py * cw + px) * 4;
          const cr = data[o], cg = data[o + 1], cb = data[o + 2];
          if (cb > cr + 6 && cb > cg + 6) continue;
          va.fromBufferAttribute(posA, i0);
          vb.fromBufferAttribute(posA, i1);
          vc.fromBufferAttribute(posA, i2);
          const p = new THREE.Vector3().addScaledVector(va, c).addScaledVector(vb, a).addScaledVector(vc, b).multiplyScalar(1.012);
          pts.push(p);
          seeds.push(Math.random());
          if (pts.length >= CONFIG.markerCount) break;
        }
        if (!pts.length) return;
        const pos = new Float32Array(pts.length * 3);
        pts.forEach((p, i) => p.toArray(pos, i * 3));
        const mgeo = new THREE.BufferGeometry();
        mgeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        mgeo.setAttribute("seed", new THREE.BufferAttribute(new Float32Array(seeds), 1));
        const mmat = new THREE.ShaderMaterial({
          transparent: true, blending: THREE.AdditiveBlending, depthTest: true, depthWrite: false,
          uniforms: { uTime: markerTime, uColor: { value: hexToVec3(CONFIG.markerColor) }, uSize: { value: CONFIG.markerSize }, uSpeed: { value: CONFIG.markerSpeed }, uRes },
          vertexShader: `
attribute float seed; uniform float uSize; uniform vec2 uRes;
varying float vSeed; varying float vFade;
void main(){
  vSeed = seed;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec3 vn = normalize(normalMatrix * normalize(position));
  vec3 vd = normalize(-mv.xyz);
  vFade = smoothstep(0.15, 0.5, dot(vn, vd));
  gl_PointSize = max(uSize * uRes.y / 900.0 * (7.0 / max(-mv.z, 1.0)), 2.0);
  gl_Position = projectionMatrix * mv;
}`,
          fragmentShader: `
uniform vec3 uColor; uniform float uTime; uniform float uSpeed;
varying float vSeed; varying float vFade;
void main(){
  if (vFade <= 0.001) discard;
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p) * 2.0;
  if (d > 1.0) discard;
  float core = smoothstep(0.30, 0.0, d) * 1.2;
  float ph = fract(uTime * uSpeed + vSeed);
  float ring = smoothstep(0.07, 0.0, abs(d - ph)) * (1.0 - ph);
  gl_FragColor = vec4(uColor, clamp(core + ring, 0.0, 1.0) * vFade);
}`,
        });
        const markers = new THREE.Points(mgeo, mmat);
        markers.frustumCulled = false;
        onlyEntire(markers);
        mesh.add(markers);
      };

      const loadPlanet = (nightTex) => {
        gltfLoader.load(PLANET_GLB, (gltf) => {
          if (disposed) return;
          const mesh = firstMesh(gltf.scene);
          if (!mesh) return;
          mesh.geometry.computeBoundingSphere();
          const s = CONFIG.planetRadius / mesh.geometry.boundingSphere.radius;
          mesh.scale.setScalar(s);
          mesh.material = mesh.material.clone();
          mesh.material.metalness = 0;
          mesh.material.roughness = 1;
          mesh.material.envMapIntensity = 0;
          mesh.material.extensions = { derivatives: true };
          mesh.material.onBeforeCompile = (shader) => {
            shader.uniforms.time = planetTime;
            shader.uniforms.noiseScale = { value: 30 };
            shader.uniforms.speedX = { value: 1.5 };
            shader.uniforms.speedY = { value: 2.0 };
            shader.uniforms.speedZ = { value: 2.5 };
            shader.uniforms.rimColor = { value: hexRaw(CONFIG.rimColor) };
            shader.uniforms.rimPower = { value: CONFIG.rimPower };
            shader.uniforms.nightBlendTexture = { value: nightTex };
            shader.uniforms.nightLights = { value: CONFIG.nightLights };
            shader.uniforms.terrainDepth = { value: CONFIG.terrainDepth };
            shader.uniforms.terrainShade = { value: CONFIG.terrainShade };
            shader.uniforms.oceanGlint = { value: CONFIG.oceanGlint };
            shader.uniforms.oceanDeep = { value: CONFIG.oceanDeep };
            shader.uniforms.oceanFlow = { value: CONFIG.oceanFlow };
            shader.uniforms.oceanFlowSpeed = { value: CONFIG.oceanFlowSpeed };
            shader.uniforms.oceanFlowScale = { value: CONFIG.oceanFlowScale };
            shader.vertexShader = "varying vec2 vCustomUv;\n" + shader.vertexShader.replace("void main() {", "void main() {\n vCustomUv = uv;");
            shader.fragmentShader =
              `varying vec2 vCustomUv; uniform float time; uniform float noiseScale; uniform float speedX; uniform float speedY; uniform float speedZ;
uniform vec3 rimColor; uniform float rimPower; uniform sampler2D nightBlendTexture; uniform float nightLights;
uniform float terrainDepth; uniform float terrainShade; uniform float oceanGlint; uniform float oceanDeep;
uniform float oceanFlow; uniform float oceanFlowSpeed; uniform float oceanFlowScale;\n${SNOISE}\n` +
              shader.fragmentShader.replace(
                "#include <dithering_fragment>",
                `#include <dithering_fragment>
vec3 normalizedNormal = normalize(vNormal);
vec3 viewDir = normalize(vViewPosition);
float rim = 1.0 - max(dot(viewDir, normalizedNormal), 0.0);
rim = pow(rim, rimPower); rim = pow(rim, 1.5); rim *= 0.7;
vec3 currentColor = gl_FragColor.rgb;
float blueDom = currentColor.b - max(currentColor.r, currentColor.g);
float waterMask = clamp(smoothstep(-0.005, 0.03, blueDom), 0.0, 1.0);
float shimmer = snoise(vec3(vCustomUv.x * noiseScale + time * speedX, vCustomUv.y * noiseScale - time * speedY, time * speedZ));
gl_FragColor.rgb += waterMask * shimmer * 0.025;
float fT = time * oceanFlowSpeed * 4.0;
float fS = 4.0 * oceanFlowScale;
float warp = snoise(vec3(vCustomUv.x * fS - fT * 0.5, vCustomUv.y * fS + fT * 0.4, fT * 0.5));
float flow = snoise(vec3(vCustomUv.x * fS * 2.0 + fT * 0.6 + warp, vCustomUv.y * fS * 2.0 - fT * 0.5, fT * 0.7));
flow = warp * 0.6 + flow * 0.4;
gl_FragColor.rgb += waterMask * flow * 0.12 * oceanFlow;
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.01, 0.06, 0.16), waterMask * oceanDeep);
vec3 finalColor = mix(gl_FragColor.rgb, rimColor, rim);
gl_FragColor = vec4(finalColor, 1.0);
vec3 surfPos = -vViewPosition;
float terrH = dot(texture2D(map, vCustomUv).rgb, vec3(0.299, 0.587, 0.114));
vec3 sigX = dFdx(surfPos), sigY = dFdy(surfPos);
vec3 vR1 = cross(sigY, normalizedNormal), vR2 = cross(normalizedNormal, sigX);
float fDet = dot(sigX, vR1);
vec3 vGrad = sign(fDet) * (dFdx(terrH) * vR1 + dFdy(terrH) * vR2);
vec3 bumpedNormal = normalize(abs(fDet) * normalizedNormal - terrainDepth * vGrad);
vec3 shadeNormal = mix(bumpedNormal, normalizedNormal, waterMask);
vec3 cityLights = texture2D(nightBlendTexture, vCustomUv).rgb * gl_FragColor.rgb * nightLights;
vec3 viewSunDir = normalize(vec3(-0.9, 0.18, 0.4));
float ndl = dot(normalizedNormal, viewSunDir);
float dayAmt = smoothstep(-0.05, 0.35, ndl);
float relief = dot(shadeNormal, viewSunDir) - ndl;
gl_FragColor.rgb *= clamp(1.0 + relief * terrainShade * dayAmt, 0.55, 1.6);
float nightFactor  = smoothstep(0.18, -0.30, ndl);
float lightsFactor = smoothstep(0.30, -0.35, ndl);
gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * 0.08, nightFactor);
gl_FragColor.rgb += cityLights * lightsFactor;
vec3 halfDir = normalize(viewSunDir + viewDir);
float ripple = snoise(vec3(vCustomUv * 240.0, time * 4.0));
float ndh = max(dot(normalizedNormal, halfDir) + ripple * 0.02, 0.0);
float glint = pow(ndh, 140.0);
gl_FragColor.rgb += glint * waterMask * dayAmt * oceanGlint * vec3(1.0, 0.97, 0.88);`
              );
          };
          mesh.material.needsUpdate = true;
          onlyEntire(mesh);
          planetGroup.add(mesh);
          try {
            buildMarkers(mesh);
          } catch {
            /* markers are decoration only */
          }
          cloudGroup.visible = true;
          planetReady = true;
          entryT = reduce ? ENTRY_DUR : 0;
        });
      };

      gltfLoader.load(
        PLANET_LIGHTS_GLB,
        (gltf) => {
          if (disposed) return;
          const m = firstMesh(gltf.scene);
          loadPlanet(m && m.material ? m.material.map : null);
        },
        undefined,
        () => loadPlanet(null)
      );

      // ---------- Scroll + loop ----------
      let curP = 0;
      let curX = STOPS_X[0].v;
      let curY = STOPS_Y[0].v;
      let curS = STOPS_S[0].v;
      let spinPhase = 0;
      let last = performance.now();

      const onResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(pr);
        renderer.setSize(w, h, false);
        [torusComposer, bloomComposer, finalComposer].forEach((c) => {
          c.setPixelRatio(pr);
          c.setSize(w, h);
        });
        uRes.value.set(w * pr, h * pr);
      };
      window.addEventListener("resize", onResize);
      onResize();

      const frame = (now) => {
        raf = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;

        planetTime.value += dt / 12;
        cloudTime.value += dt / 20;
        starTime.value += dt;
        markerTime.value += dt;

        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pTarget = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
        curP += (pTarget - curP) * Math.min(1, dt * 4.5);
        const sideScale = clamp(window.innerWidth / 1200, 0.5, 1);
        const k = Math.min(1, dt * 3.2);
        curX += (sample(STOPS_X, curP) * sideScale - curX) * k;
        curY += (sample(STOPS_Y, curP) - curY) * k;
        curS += (sample(STOPS_S, curP) - curS) * k;

        let entryY = 0;
        if (planetReady) {
          entryT = Math.min(ENTRY_DUR, entryT + dt);
          const t = entryT / ENTRY_DUR;
          const e = 1 - Math.pow(1 - t, 3);
          entryY = (1 - e) * ENTRY_START_Y;
        } else {
          entryY = ENTRY_START_Y;
        }
        worldGroup.position.set(curX, curY + entryY, 0);
        worldGroup.scale.setScalar(curS);

        spinPhase += dt * CONFIG.spin;
        planetGroup.rotation.y = CONFIG.initRotation + spinPhase + curP * Math.PI * 1.6;
        cloudMeshes.forEach((m) => {
          m.rotation.y += dt * CONFIG[m.userData.spin];
        });
        glowMesh.quaternion.copy(camera.quaternion);
        glowMesh.visible = planetReady;

        controls.update();

        camera.layers.set(LAYERS.TORUS_SCENE);
        torusComposer.render();
        camera.layers.set(LAYERS.BLOOM_SCENE);
        bloomComposer.render();
        camera.layers.set(LAYERS.ENTIRE_SCENE);
        finalComposer.render();
      };
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        draco.dispose();
        controls.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="planet-canvas" aria-hidden="true" />;
}
