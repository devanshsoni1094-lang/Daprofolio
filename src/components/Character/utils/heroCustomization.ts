import * as THREE from "three";

export function customizeHeroCharacter(character: THREE.Object3D) {
  // 1. Traverse character to remove/hide cap/hat meshes
  character.traverse((child: any) => {
    const name = (child.name || "").toLowerCase();
    // Check for cap, hat, visor, headwear, or cap-related mesh objects
    if (
      name.includes("cap") ||
      name.includes("hat") ||
      name.includes("visor") ||
      name.includes("headwear")
    ) {
      child.visible = false;
    }
  });

  // 2. Find head bone ('spine006' or head object)
  const headBone = character.getObjectByName("spine006") || character.getObjectByName("Head") || character.getObjectByName("head");
  if (!headBone) {
    console.warn("Head bone (spine006) not found on character model.");
    return;
  }

  // Remove existing custom accessories if re-running
  const existingHeadphones = headBone.getObjectByName("customHeadphones");
  if (existingHeadphones) headBone.remove(existingHeadphones);

  const existingBeard = headBone.getObjectByName("customBeard");
  if (existingBeard) headBone.remove(existingBeard);

  // ----------------------------------------------------
  // 3. CREATE STYLISH 3D HEADPHONES
  // ----------------------------------------------------
  const headphonesGroup = new THREE.Group();
  headphonesGroup.name = "customHeadphones";

  // Materials
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1c1d22,
    metalness: 0.85,
    roughness: 0.25,
  });

  const cushionMat = new THREE.MeshStandardMaterial({
    color: 0x111114,
    roughness: 0.9,
    metalness: 0.1,
  });

  const accentCyanMat = new THREE.MeshStandardMaterial({
    color: 0x00f0ff,
    emissive: 0x0088bb,
    emissiveIntensity: 0.6,
    metalness: 0.8,
    roughness: 0.2,
  });

  const silverMat = new THREE.MeshStandardMaterial({
    color: 0xd0d5dd,
    metalness: 0.95,
    roughness: 0.15,
  });

  // Ear Cup Geometries & Meshes
  const cupRadius = 0.22;
  const cupThickness = 0.12;

  // Left Cup
  const cupLeftGroup = new THREE.Group();
  const outerCupL = new THREE.Mesh(
    new THREE.CylinderGeometry(cupRadius, cupRadius, cupThickness, 32),
    darkMetalMat
  );
  outerCupL.rotation.z = Math.PI / 2;
  outerCupL.castShadow = true;

  const cushionL = new THREE.Mesh(
    new THREE.TorusGeometry(cupRadius * 0.85, 0.05, 16, 32),
    cushionMat
  );
  cushionL.rotation.y = Math.PI / 2;
  cushionL.position.x = 0.05;

  const ringL = new THREE.Mesh(
    new THREE.TorusGeometry(cupRadius * 0.98, 0.025, 16, 32),
    accentCyanMat
  );
  ringL.rotation.y = Math.PI / 2;
  ringL.position.x = -0.04;

  cupLeftGroup.add(outerCupL, cushionL, ringL);
  cupLeftGroup.position.set(-0.62, 0.15, 0.08);

  // Right Cup
  const cupRightGroup = new THREE.Group();
  const outerCupR = new THREE.Mesh(
    new THREE.CylinderGeometry(cupRadius, cupRadius, cupThickness, 32),
    darkMetalMat
  );
  outerCupR.rotation.z = Math.PI / 2;
  outerCupR.castShadow = true;

  const cushionR = new THREE.Mesh(
    new THREE.TorusGeometry(cupRadius * 0.85, 0.05, 16, 32),
    cushionMat
  );
  cushionR.rotation.y = Math.PI / 2;
  cushionR.position.x = -0.05;

  const ringR = new THREE.Mesh(
    new THREE.TorusGeometry(cupRadius * 0.98, 0.025, 16, 32),
    accentCyanMat
  );
  ringR.rotation.y = Math.PI / 2;
  ringR.position.x = 0.04;

  cupRightGroup.add(outerCupR, cushionR, ringR);
  cupRightGroup.position.set(0.62, 0.15, 0.08);

  // Headband Arch
  const headbandRadius = 0.65;
  const headbandTube = 0.035;
  const headbandGeo = new THREE.TorusGeometry(
    headbandRadius,
    headbandTube,
    16,
    32,
    Math.PI * 0.92
  );
  const headbandMesh = new THREE.Mesh(headbandGeo, darkMetalMat);
  headbandMesh.rotation.x = Math.PI / 2;
  headbandMesh.rotation.z = -Math.PI * 0.04;
  headbandMesh.position.set(0, 0.15, 0.08);

  // Top Cushion Pad
  const topPadGeo = new THREE.TorusGeometry(
    headbandRadius,
    headbandTube * 1.4,
    16,
    32,
    Math.PI * 0.5
  );
  const topPadMesh = new THREE.Mesh(topPadGeo, cushionMat);
  topPadMesh.rotation.x = Math.PI / 2;
  topPadMesh.rotation.z = Math.PI * 0.25;
  topPadMesh.position.set(0, 0.15, 0.08);

  // Metal sliders
  const sliderL = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.15, 0.04),
    silverMat
  );
  sliderL.position.set(-0.58, 0.28, 0.08);

  const sliderR = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.15, 0.04),
    silverMat
  );
  sliderR.position.set(0.58, 0.28, 0.08);

  headphonesGroup.add(
    cupLeftGroup,
    cupRightGroup,
    headbandMesh,
    topPadMesh,
    sliderL,
    sliderR
  );

  // Position headphones on headbone
  headphonesGroup.position.set(0, 0.1, -0.05);
  headphonesGroup.scale.set(1.15, 1.15, 1.15);

  headBone.add(headphonesGroup);

  // ----------------------------------------------------
  // 4. CREATE WELL-GROOMED 3D BEARD & MUSTACHE
  // ----------------------------------------------------
  const beardGroup = new THREE.Group();
  beardGroup.name = "customBeard";

  const beardMat = new THREE.MeshStandardMaterial({
    color: 0x161311,
    roughness: 0.85,
    metalness: 0.15,
  });

  const beardDetailMat = new THREE.MeshStandardMaterial({
    color: 0x221d19,
    roughness: 0.75,
    metalness: 0.2,
  });

  // Chin & Jawline Beard Base
  const chinShape = new THREE.SphereGeometry(0.26, 32, 16);
  const chinBeard = new THREE.Mesh(chinShape, beardMat);
  chinBeard.scale.set(1.25, 0.7, 0.85);
  chinBeard.position.set(0, -0.42, 0.45);
  chinBeard.rotation.x = 0.2;

  // Jawline Extensions (Left & Right)
  const jawL = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.18, 0.45, 16),
    beardMat
  );
  jawL.rotation.z = -0.45;
  jawL.rotation.x = 0.15;
  jawL.position.set(-0.35, -0.32, 0.32);

  const jawR = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.18, 0.45, 16),
    beardMat
  );
  jawR.rotation.z = 0.45;
  jawR.rotation.x = 0.15;
  jawR.position.set(0.35, -0.32, 0.32);

  // Sideburns connecting to hair/headphones
  const sideburnL = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.35, 0.15),
    beardDetailMat
  );
  sideburnL.position.set(-0.48, -0.05, 0.18);
  sideburnL.rotation.z = -0.15;

  const sideburnR = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.35, 0.15),
    beardDetailMat
  );
  sideburnR.position.set(0.48, -0.05, 0.18);
  sideburnR.rotation.z = 0.15;

  // Mustache
  const stacheL = new THREE.Mesh(
    new THREE.ConeGeometry(0.09, 0.26, 16),
    beardDetailMat
  );
  stacheL.rotation.z = Math.PI / 2 + 0.35;
  stacheL.rotation.x = -0.2;
  stacheL.position.set(-0.13, -0.24, 0.54);

  const stacheR = new THREE.Mesh(
    new THREE.ConeGeometry(0.09, 0.26, 16),
    beardDetailMat
  );
  stacheR.rotation.z = -(Math.PI / 2 + 0.35);
  stacheR.rotation.x = -0.2;
  stacheR.position.set(0.13, -0.24, 0.54);

  // Soul patch
  const soulPatch = new THREE.Mesh(
    new THREE.BoxGeometry(0.09, 0.1, 0.08),
    beardMat
  );
  soulPatch.position.set(0, -0.34, 0.52);

  beardGroup.add(
    chinBeard,
    jawL,
    jawR,
    sideburnL,
    sideburnR,
    stacheL,
    stacheR,
    soulPatch
  );

  beardGroup.position.set(0, 0.05, 0.02);
  beardGroup.scale.set(1.1, 1.1, 1.1);

  headBone.add(beardGroup);
}
