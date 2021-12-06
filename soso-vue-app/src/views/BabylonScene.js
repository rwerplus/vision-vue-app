import * as BABYLON from 'babylonjs'
import * as Materials from 'babylonjs-materials';

const createScene = (canvas, fallback) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  // const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, , 15, new BABYLON.Vector3(0, 0, 0));
  // camera.attachControl(canvas, true);

  const cameras = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  cameras.attachControl(canvas, false);
  cameras.target = new BABYLON.Vector3(0, 0, 0);
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
  // 圆锥形
  const cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {
    diameterTop: 0
  });

  cylinder.rotation = new BABYLON.Vector3(0, 0, Math.PI / 2);
  cylinder.position.x = 1
  //-----------------------
  var CoT = new BABYLON.TransformNode("root");
  CoT.position.x = 4;
  cylinder.parent = CoT;
  //Animation
  var angle = 0;
  scene.registerBeforeRender(function () {
    CoT.rotation.y = angle;
    angle += 0.01;
    if (angle > 3.14) {
      angle = -angle;
    }
  });

  showAxis(6, scene);
  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function (e) {
    scene.render();
  });

  // Watch for browser/canvas resize events
  window.addEventListener("resize", function () {
    engine.resize();
  });
  return scene;
};

/***********Create and Draw Axes**************************************/
const showAxis = (size, scene) => {
  const makeTextPlane = (text, color, size) => {
    const dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
    const plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
  };

  const axisX = BABYLON.Mesh.CreateLines("axisX", [
    new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
    new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
  ]);
  axisX.color = new BABYLON.Color3(1, 0, 0);
  const xChar = makeTextPlane("X", "red", size / 10);
  xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

  const axisY = BABYLON.Mesh.CreateLines("axisY", [
    new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
    new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
  ]);
  axisY.color = new BABYLON.Color3(0, 1, 0);
  const yChar = makeTextPlane("Y", "green", size / 10);
  yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

  const axisZ = BABYLON.Mesh.CreateLines("axisZ", [
    new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
    new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
  ]);
  axisZ.color = new BABYLON.Color3(0, 0, 1);
  const zChar = makeTextPlane("Z", "blue", size / 10);
  zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};

export {
  createScene
};