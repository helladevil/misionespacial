
import * as THREE from 'three'


//Nuestra Escena
const scene=new THREE.Scene()
scene.background=new THREE.Color(0x000010)


//Nuestra Camara
const camera=new THREE.PerspectiveCamera(
    75,//Angulo de la camara(Vision en grados)
    window.innerWidth/window.innerHeight, //Relacionde aspecto ancho alto
    0.1,//distancia minima
    1000, //distancia maxima
)

camera.position.z=5;

//Renderizado webGL
const render=new THREE.webGLRenderer({
    antialias:true
})
render.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(render.domElement)

//Luz de la Escena
const light= new THREE.PointLight(0xffffff,2,100)
light.position.set(5,5,5)
scene.add(light)

//Panel 1
const panelGeo=new THREE.BoxGeometry(2,1,0.5)
const panelGeoMat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    emissive:0x00ffff,
    emissiveIntensity:0.5,
})

const panel1=new THREE.Mesh(panelGeo,panelGeoMat)
scene.add(panel1)

function animate(){
    requestAnimationFrame(animate)
    render.render(scene,camera)
}
animate()
