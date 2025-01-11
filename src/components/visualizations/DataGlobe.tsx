import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useToast } from "@/hooks/use-toast";

export const DataGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mountRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Add globe
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x0ea5e9,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      const globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

      // Camera position
      camera.position.z = 5;

      // Add controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.001;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        mountRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
      };
    } catch (err) {
      console.error("Erreur lors de l'initialisation du globe:", err);
      setError("Erreur lors du chargement du globe");
      toast({
        description: "Impossible de charger le globe 3D",
        variant: "destructive"
      });
    }
  }, []);

  if (error) {
    return (
      <Card className="w-full h-[400px] flex items-center justify-center">
        <p className="text-destructive">{error}</p>
      </Card>
    );
  }

  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
    </Card>
  );
};