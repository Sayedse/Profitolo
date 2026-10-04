import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { CheckCircle2, ShieldCheck, Terminal, GitBranch, Sparkles, TrendingUp, Code2 } from 'lucide-react';

// Laptop 3D Model with Realistic Geometry and Interactive Glow
function Laptop({ 
  mousePos, 
  scrollYRef 
}: { 
  mousePos: { x: number; y: number };
  scrollYRef: React.RefObject<number>;
}) {
  const laptopGroup = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (laptopGroup.current) {
      // Smooth subtle parallax rotation tracking mouse & scroll
      const scrollOffset = Math.min((scrollYRef.current || 0) * 0.0012, 0.8);
      const targetRotY = mousePos.x * 0.35;
      const targetRotX = mousePos.y * 0.2 + 0.1 - scrollOffset * 0.25;
      const targetPosZ = -scrollOffset * 0.7;
      const targetPosY = -0.6 - scrollOffset * 0.35;

      laptopGroup.current.rotation.y = THREE.MathUtils.damp(laptopGroup.current.rotation.y, targetRotY, 4, delta);
      laptopGroup.current.rotation.x = THREE.MathUtils.damp(laptopGroup.current.rotation.x, targetRotX, 4, delta);
      laptopGroup.current.position.z = THREE.MathUtils.damp(laptopGroup.current.position.z, targetPosZ, 4, delta);
      laptopGroup.current.position.y = THREE.MathUtils.damp(laptopGroup.current.position.y, targetPosY, 4, delta);
    }
  });

  return (
    <group 
      ref={laptopGroup} 
      position={[0, -0.6, 0]} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      {/* Laptop Base */}
      <mesh position={[0, -0.05, 0.4]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial 
          color="#0F172A" 
          metalness={0.85} 
          roughness={0.25} 
        />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.002, 1.05]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshStandardMaterial 
          color="#1E293B" 
          metalness={0.6} 
          roughness={0.4} 
        />
      </mesh>

      {/* Keyboard Bed */}
      <mesh position={[0, 0.002, 0.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 1.1]} />
        <meshStandardMaterial 
          color="#090D16" 
          metalness={0.5} 
          roughness={0.7} 
        />
      </mesh>

      {/* Laptop Screen Lid (Angled backwards) */}
      <group position={[0, 0, -0.68]} rotation={[-0.28, 0, 0]}>
        {/* Screen Outer Lid */}
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[3.2, 2.1, 0.08]} />
          <meshStandardMaterial 
            color="#0F172A" 
            metalness={0.85} 
            roughness={0.2} 
          />
        </mesh>

        {/* Screen Bezel Accent Border */}
        <mesh position={[0, 1.05, 0.042]}>
          <planeGeometry args={[3.06, 1.96]} />
          <meshStandardMaterial color="#020617" roughness={0.9} />
        </mesh>

        {/* Glowing Screen Display with Test Runner / Code Content */}
        <mesh position={[0, 1.05, 0.046]}>
          <planeGeometry args={[2.92, 1.82]} />
          <meshBasicMaterial color="#070D18" />
        </mesh>

        {/* Screen WebGL HTML Interface Overlay */}
        <Html
          transform
          occlude
          position={[0, 1.05, 0.048]}
          distanceFactor={1.75}
          className="pointer-events-none select-none"
        >
          <div className="w-[490px] h-[305px] bg-[#070D18]/95 p-4 rounded text-left font-mono text-[11px] leading-relaxed text-slate-300 border border-cyan-500/30 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Terminal Window Header */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-slate-400 ml-2 font-sans font-medium flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    runner@sayed-sepehr: ~/monevo-automation
                  </span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PIPELINE PASSING
                </span>
              </div>

              {/* Running Test Suite Stream */}
              <div className="space-y-1 text-[10px]">
                <div className="text-cyan-400">
                  $ mvn clean test -Dsuite=RegressionSuite.xml
                </div>
                <div className="text-slate-400">
                  [INFO] Running TestNG Suite: <span className="text-slate-200">MonevoAuth &amp; CashFlow Verification</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>[PASS] testValidSupabaseSessionAuth() (214ms)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>[PASS] testCanIAffordItAffordabilityCalculation() (148ms)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>[PASS] testBudgetCeilingsAndThresholdAlerts() (86ms)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>[PASS] testDatabaseTransactionsConsistency() (112ms)</span>
                </div>
              </div>
            </div>

            {/* Test Summary Bottom Bar */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
              <span className="text-emerald-400 font-semibold">
                ✓ Tests run: 32, Failures: 0, Errors: 0, Skipped: 0
              </span>
              <span className="text-slate-500">BUILD SUCCESS (4.82s)</span>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

// Floating QA Automation Shield & Status Card
function FloatingQABadge() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={[2.6, 1.2, -0.4]}>
      <Html transform distanceFactor={2.2} className="pointer-events-none select-none">
        <div className="w-56 p-3.5 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-500/10 text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-100 flex items-center gap-1">
                QA Automation
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">100% Automated Suites</div>
            </div>
          </div>
          <div className="space-y-1.5 text-[10px] text-slate-300">
            <div className="flex justify-between items-center bg-slate-900/60 px-2 py-1 rounded border border-white/5">
              <span>Selenium / Playwright</span>
              <span className="text-emerald-400 font-bold">READY</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/60 px-2 py-1 rounded border border-white/5">
              <span>REST Assured API</span>
              <span className="text-cyan-400 font-bold">200 OK</span>
            </div>
          </div>
        </div>
      </Html>
    </Float>
  );
}

// Floating Monevo AI Finance Preview Card
function FloatingFinanceCard() {
  return (
    <Float speed={2.5} rotationIntensity={0.25} floatIntensity={0.6} position={[-2.7, 1.3, -0.2]}>
      <Html transform distanceFactor={2.2} className="pointer-events-none select-none">
        <div className="w-56 p-3.5 rounded-xl bg-[#090E1A]/90 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 text-left">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-100">Monevo AI</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-medium">
              Live State
            </span>
          </div>

          <div className="bg-slate-950/70 p-2 rounded-lg border border-white/5 mb-2">
            <div className="text-[10px] text-slate-400">Total Net Balance</div>
            <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
              $18,450.28
              <span className="text-[10px] text-emerald-400 flex items-center font-normal">
                <TrendingUp className="w-3 h-3 mr-0.5" /> +2.1%
              </span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>AI Coach:</span>
            <span className="text-cyan-300 font-mono">"Can I Afford It?" ✓</span>
          </div>
        </div>
      </Html>
    </Float>
  );
}

// Floating Git Branching Tree Visual
function FloatingGitBranch() {
  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4} position={[2.4, -0.8, 0.4]}>
      <Html transform distanceFactor={2.2} className="pointer-events-none select-none">
        <div className="p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-purple-500/30 text-left text-[10px] flex items-center gap-2 text-slate-300">
          <GitBranch className="w-4 h-4 text-purple-400" />
          <span className="font-mono text-purple-300">git:</span>
          <span>feature/ai-coach → main</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 ml-1" />
        </div>
      </Html>
    </Float>
  );
}

// Floating Code Panel showing Real Automation Script
function FloatingCodePanel() {
  return (
    <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.4} position={[-2.7, -0.7, 0.3]}>
      <Html transform distanceFactor={2.3} className="pointer-events-none select-none">
        <div className="w-60 p-3 rounded-xl bg-dark-950/90 backdrop-blur-md border border-cyan-500/30 text-left font-mono text-[9px] shadow-xl shadow-cyan-950/30">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[9px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Code2 className="w-3 h-3 text-cyan-400" />
              MonevoAutomationTest.java
            </span>
            <span className="text-emerald-400">TestNG</span>
          </div>
          <div className="space-y-0.5 text-slate-300">
            <div><span className="text-purple-400">@Test</span>(groups = <span className="text-emerald-300">"regression"</span>)</div>
            <div><span className="text-cyan-400">public void</span> <span className="text-yellow-300">verifyBudgetLimits</span>() {'{'}</div>
            <div className="pl-2 text-slate-400">// Assert monthly budget limits</div>
            <div className="pl-2">Response res = <span className="text-blue-300">apiClient</span>.get(<span className="text-emerald-300">"/budget"</span>);</div>
            <div className="pl-2"><span className="text-yellow-300">assertEquals</span>(res.statusCode(), <span className="text-amber-400">200</span>);</div>
            <div className="pl-2"><span className="text-yellow-300">assertTrue</span>(res.json().isAffordable());</div>
            <div>{'}'}</div>
          </div>
        </div>
      </Html>
    </Float>
  );
}

// Cyber Dust Particles Background in 3D Space
function CyberParticles({ count = 120 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 14;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 10;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38BDF8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Canvas Workspace
export default function ThreeDWorkspace() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const scrollYRef = useRef<number>(0);

  // Detect Mobile, WebGL capability and passive scroll position
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Graceful Fallback if WebGL is unavailable
  if (!hasWebGL) {
    return (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center p-6 bg-dark-900/60 border border-slate-800 rounded-2xl text-center">
        <div className="max-w-md space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-100">Engineering &amp; QA Automation Workspace</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            Interactive Test Automation Suites | Java • Selenium • Playwright • REST Assured • Supabase
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-[480px] lg:h-[580px] cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouseMove}
      aria-label="Interactive 3D Developer & QA Automation Workspace"
    >
      <Canvas
        camera={{ position: [0, 0.4, 5], fov: 45 }}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Cyber Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFFFFF" />
        <pointLight position={[-4, 3, 2]} intensity={1.5} color="#00F2FE" distance={10} />
        <pointLight position={[4, -2, 2]} intensity={1.5} color="#10B981" distance={10} />
        <pointLight position={[0, 2, -2]} intensity={0.8} color="#8B5CF6" distance={8} />

        {/* 3D Elements */}
        <Laptop mousePos={mousePos} scrollYRef={scrollYRef} />
        
        {/* Supplementary floating 3D widgets (lighter on mobile) */}
        {!isMobile && (
          <>
            <FloatingQABadge />
            <FloatingFinanceCard />
            <FloatingGitBranch />
            <FloatingCodePanel />
          </>
        )}

        <CyberParticles count={isMobile ? 50 : 130} />
      </Canvas>

      {/* Subtle bottom gradient mask for seamless layout integration */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
      
      {/* Interactive Hint Indicator */}
      <div className="absolute bottom-2 right-4 text-[10px] font-mono text-slate-500/80 pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-ping" />
        Interactive 3D Space • Move Cursor &amp; Scroll
      </div>
    </div>
  );
}
