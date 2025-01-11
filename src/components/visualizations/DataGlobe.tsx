import { useEffect, useRef, useState } from "react";
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

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;

    try {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      // Create globe
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x1E88E5,
        wireframe: true,
      });
      const globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Lighting
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(10, 10, 10);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      camera.position.z = 15;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.005;
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
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
      console.error('Erreur lors de l\'initialisation du globe:', err);
      setError('Erreur lors du chargement du globe 3D');
      toast({
        description: "Erreur lors du chargement du globe 3D",
        variant: "destructive",
      });
    }
  }, [toast]);

  if (error) {
    return (
      <Card className="p-4 text-center text-red-500">
        {error}
      </Card>
    );
  }

  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
    </Card>
  );
};