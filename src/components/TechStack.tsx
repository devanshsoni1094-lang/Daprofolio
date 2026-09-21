import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const createTechTexture = (
  name: string,
  bgColor: string,
  drawIcon: (ctx: CanvasRenderingContext2D) => void
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  // Background fill
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 512, 512);

  // Outer border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.lineWidth = 14;
  ctx.strokeRect(12, 12, 488, 488);

  // Draw icon graphics
  drawIcon(ctx);

  // Label text
  ctx.fillStyle = "#ffffff";
  ctx.font = name.length > 12 ? "bold 34px sans-serif" : "bold 44px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
  ctx.shadowBlur = 12;
  ctx.fillText(name, 256, 420);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Generate 8 Data Analyst & Data Science tech stack textures
const generateDataAnalystTextures = (): THREE.CanvasTexture[] => {
  return [
    // 1. Python Logo
    createTechTexture("Python", "#0F172A", (ctx) => {
      ctx.fillStyle = "#3776AB";
      ctx.beginPath();
      ctx.arc(220, 200, 65, Math.PI * 0.75, Math.PI * 1.75);
      ctx.lineTo(260, 150);
      ctx.arc(260, 200, 65, Math.PI * 1.75, Math.PI * 0.75);
      ctx.fill();

      ctx.fillStyle = "#FFD43B";
      ctx.beginPath();
      ctx.arc(292, 260, 65, Math.PI * 1.75, Math.PI * 0.75);
      ctx.lineTo(252, 310);
      ctx.arc(252, 260, 65, Math.PI * 0.75, Math.PI * 1.75);
      ctx.fill();
    }),

    // 2. Excel Logo
    createTechTexture("Excel", "#107C41", (ctx) => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(150, 130, 212, 212);
      ctx.fillStyle = "#107C41";
      ctx.font = "bold 150px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("X", 256, 236);
    }),

    // 3. Power BI Logo
    createTechTexture("Power BI", "#18181B", (ctx) => {
      ctx.fillStyle = "#F2C811";
      ctx.fillRect(165, 230, 48, 110);
      ctx.fillStyle = "#E6AD10";
      ctx.fillRect(232, 170, 48, 170);
      ctx.fillStyle = "#F5D742";
      ctx.fillRect(299, 120, 48, 220);
    }),

    // 4. Tableau Logo
    createTechTexture("Tableau", "#0B132B", (ctx) => {
      ctx.fillStyle = "#E97627";
      ctx.fillRect(236, 120, 40, 200);
      ctx.fillRect(156, 200, 200, 40);

      ctx.fillStyle = "#2B5B84";
      ctx.fillRect(236, 80, 40, 30);
      ctx.fillStyle = "#E84125";
      ctx.fillRect(236, 330, 40, 30);
      ctx.fillStyle = "#4E9BCC";
      ctx.fillRect(116, 200, 30, 40);
      ctx.fillStyle = "#1F4370";
      ctx.fillRect(366, 200, 30, 40);
    }),

    // 5. MySQL Logo
    createTechTexture("MySQL", "#00758F", (ctx) => {
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(256, 220, 90, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#00758F";
      ctx.font = "bold 44px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("MySQL", 256, 220);
    }),

    // 6. DAX Logo
    createTechTexture("DAX", "#1E1B4B", (ctx) => {
      ctx.fillStyle = "#F59E0B";
      ctx.font = "italic bold 90px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("fx", 256, 180);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 42px sans-serif";
      ctx.fillText("DAX Measures", 256, 275);
    }),

    // 7. Statistics Logo
    createTechTexture("Statistics", "#0F172A", (ctx) => {
      ctx.strokeStyle = "#38BDF8";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(100, 280);
      ctx.bezierCurveTo(180, 280, 200, 130, 256, 130);
      ctx.bezierCurveTo(312, 130, 332, 280, 412, 280);
      ctx.stroke();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(90, 280);
      ctx.lineTo(422, 280);
      ctx.stroke();
    }),

    // 8. Machine Learning Logo
    createTechTexture("Machine Learning", "#111827", (ctx) => {
      const nodes = [
        { x: 170, y: 170 }, { x: 170, y: 270 },
        { x: 256, y: 140 }, { x: 256, y: 220 }, { x: 256, y: 300 },
        { x: 342, y: 220 }
      ];

      ctx.strokeStyle = "rgba(168, 85, 247, 0.6)";
      ctx.lineWidth = 6;
      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (i < j && n2.x > n1.x) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        });
      });

      nodes.forEach((n) => {
        ctx.fillStyle = "#06B6D4";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
        ctx.fill();
      });
    }),
  ];
};

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(32)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const target = document.getElementById("work");
      if (target) {
        const threshold = target.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      }
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    const techTextures = generateDataAnalystTextures();
    return techTextures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.25,
          metalness: 0.4,
          roughness: 0.8,
          clearcoat: 0.2,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
