/*
  MEDIA PATHS - EDIT HERE
  Put every image and video directly inside the root assets/ folder.
  Use only the filename below, not a folder path.

  Images: jpg, jpeg, png, webp, gif, svg
  Videos: mp4, webm, ogv, mov

  To use a video in any slot:
    1. Drop the video into assets/
    2. Change file to something like "my-demo.mp4"
    3. Optional: set type to "video"
*/

window.SCATTERFLOW_MEDIA_BASE = "assets/";

window.SCATTERFLOW_MEDIA = {
  // Hero video. Drop hero-trailer.mp4 into assets/ to replace the YouTube embed.
  heroTrailer: {
    label: "Hero trailer video",
    file: "hero-trailer.mp4",
    type: "video",
    poster: "_video-placeholder.svg",
    fallbackEmbed: "https://www.youtube.com/embed/vHxwFq9uMvY?autoplay=1&mute=1&loop=1&playlist=vHxwFq9uMvY"
  },


  // Community Reviews
  testimonialCgHorizonAvatar: { label: "CG Horizon avatar", file: "cg-horizon-avatar.jpg", type: "image", original: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" },
  testimonial3dForgeAvatar: { label: "The 3D Forge avatar", file: "3d-forge-avatar.jpg", type: "image", original: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
  testimonialPolyMasteryAvatar: { label: "PolyMastery avatar", file: "polymastery-avatar.jpg", type: "image", original: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },

  // Core Features
  featureInstantEcosystem: { label: "Instant ecosystem hero image", file: "instant-ecosystem-creation.jpg", type: "image", original: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80" },
  featurePremadeEcosystems: { label: "Premade ecosystems card", file: "premade-ecosystems.jpg", type: "image", original: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80" },
  featureInstantPopulation: { label: "Instant population card", file: "instant-population.jpg", type: "image", original: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
  featureOneClickWorkflow: { label: "One-click workflow card", file: "one-click-workflow.jpg", type: "image", original: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" },

  // Ecosystem Presets
  biomeDenseForest: { label: "Dense Forest slider", file: "dense-forest.jpg", type: "image", original: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80" },
  biomeTropicalJungle: { label: "Tropical Jungle slider", file: "tropical-jungle.jpg", type: "image", original: "https://images.unsplash.com/photo-1518182170546-076616fdacfb?auto=format&fit=crop&w=400&q=80" },
  biomeAquaticReef: { label: "Aquatic Reef slider", file: "aquatic-reef.jpg", type: "image", original: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80" },
  biomeAridWasteland: { label: "Arid Wasteland slider", file: "arid-wasteland.jpg", type: "image", original: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" },
  biomeSpringMeadow: { label: "Spring Meadow slider", file: "spring-meadow.jpg", type: "image", original: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" },

  // Advanced Scatter Engine
  scatterMaterialColorization: { label: "Material Control & Colorization", file: "material-control-colorization.jpg", type: "image", original: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
  scatterPhysicsBasedScattering: { label: "Physics-Based Scattering", file: "physics-based-scattering.jpg", type: "image", original: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=400&q=80" },
  scatterSpeedOptimization: { label: "Speed & Optimization", file: "speed-optimization.jpg", type: "image", original: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80" },
  scatterProceduralMasks: { label: "Procedural Masks", file: "procedural-masks.jpg", type: "image", original: "https://images.unsplash.com/photo-1563209259-ea2ffbf34fb4?auto=format&fit=crop&w=400&q=80" },
  scatterPrecisionControl: { label: "Precision Control", file: "precision-control.jpg", type: "image", original: "https://images.unsplash.com/photo-1524806082260-261bd1173264?auto=format&fit=crop&w=400&q=80" },
  scatterGrowthBehavior: { label: "Growth Behavior", file: "growth-behavior.jpg", type: "image", original: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?auto=format&fit=crop&w=400&q=80" },
  scatterGridArrays: { label: "Grid Arrays", file: "grid-arrays.jpg", type: "image", original: "https://images.unsplash.com/photo-1506869640319-ce1a18f9bfc0?auto=format&fit=crop&w=400&q=80" },
  scatterIntegratedDecalSystem: { label: "Integrated Decal System", file: "integrated-decal-system.jpg", type: "image", original: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=600&q=80" },
  scatterAltitudeSlope: { label: "Altitude & Slope", file: "altitude-slope.jpg", type: "image", original: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=400&q=80" },

  // Atmospheric Systems
  weatherProceduralRain: { label: "Procedural Rain System", file: "procedural-rain.jpg", type: "image", original: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80" },
  weatherSurfaceCollision: { label: "Surface Collision", file: "surface-collision.jpg", type: "image", original: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=400&q=80" },
  weatherRippleShader: { label: "Ripple Shader", file: "ripple-shader.jpg", type: "image", original: "https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=400&q=80" },
  weatherAccumulatingSnow: { label: "Accumulating Snow", file: "accumulating-snow.jpg", type: "image", original: "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&w=600&q=80" },
  weatherSnowGroundCover: { label: "Snow Ground Cover", file: "snow-ground-cover.jpg", type: "image", original: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=400&q=80" },

  // Fluid Dynamics
  waterFlowMapsFoam: { label: "Flow Maps & Foam", file: "flow-maps-foam.jpg", type: "image", original: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80" },
  waterRealisticCaustics: { label: "Realistic Caustics", file: "realistic-caustics.jpg", type: "image", original: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=400&q=80" },
  waterShorelineScattering: { label: "Shoreline Scattering", file: "shoreline-scattering.jpg", type: "image", original: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
  waterCollisionRipples: { label: "Collision Ripples", file: "collision-ripples.jpg", type: "image", original: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80" },
  waterBuoyancyDebris: { label: "Buoyancy & Debris", file: "buoyancy-debris.jpg", type: "image", original: "https://images.unsplash.com/photo-1533518336332-9ab2e4b47e50?auto=format&fit=crop&w=400&q=80" },

  // Water Presets
  waterPresetTropical: { label: "Tropical water preset", file: "tropical.jpg", type: "image", original: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80" },
  waterPresetLake: { label: "Lake water preset", file: "lake.jpg", type: "image", original: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=300&q=80" },
  waterPresetRiver: { label: "River water preset", file: "river.jpg", type: "image", original: "https://images.unsplash.com/photo-1432405972618-c6a4f534125f?auto=format&fit=crop&w=300&q=80" },
  waterPresetPool: { label: "Pool water preset", file: "pool.jpg", type: "image", original: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=300&q=80" },
  waterPresetClear: { label: "Clear water preset", file: "clear.jpg", type: "image", original: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=300&q=80" },
  waterPresetPuddles: { label: "Puddles water preset", file: "puddles.jpg", type: "image", original: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=300&q=80" },

  // Production Assets
  assetPbrMaterials: { label: "4K PBR Materials", file: "4k-pbr-materials.jpg", type: "image", original: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80" },
  assetViewportOptimized: { label: "Viewport Optimized", file: "viewport-optimized.jpg", type: "image", original: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },

  // Asset Vault Tabs
  vaultTabFoliageNature: { label: "Foliage & Nature tab", file: "foliage-nature.jpg", type: "image", original: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=300&q=80" },
  vaultTabTrashDecay: { label: "Trash & Decay tab", file: "trash-decay.jpg", type: "image", original: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=300&q=80" },
  vaultTabDebrisRuins: { label: "Debris & Ruins tab", file: "debris-ruins.jpg", type: "image", original: "https://images.unsplash.com/photo-1526435987119-72b17f8a32bb?auto=format&fit=crop&w=300&q=80" },
  vaultTabLandscapes: { label: "Landscapes tab", file: "landscapes.jpg", type: "image", original: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80" },
  vaultTabWaterSystems: { label: "Water Systems tab", file: "water-systems.jpg", type: "image", original: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=300&q=80" },
  vaultTabSurfaceDecals: { label: "Surface Decals tab", file: "surface-decals.jpg", type: "image", original: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=300&q=80" },

  // Asset Vault Items
  vaultItemHighResTrees: { label: "High-Res Trees", file: "high-res-trees.jpg", type: "image", original: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&q=80" },
  vaultItemGrassWeeds: { label: "Grass & Weeds", file: "grass-weeds.jpg", type: "image", original: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=300&q=80" },
  vaultItemGreatBurdock: { label: "Great Burdock", file: "great-burdock.jpg", type: "image", original: "https://images.unsplash.com/photo-1463003416389-296a1ad37ca0?auto=format&fit=crop&w=300&q=80" },
  vaultItemStingingNettle: { label: "Stinging Nettle", file: "stinging-nettle.jpg", type: "image", original: "https://images.unsplash.com/photo-1588636504221-cdaff9fdbca5?auto=format&fit=crop&w=300&q=80" },
  vaultItemMossyRocks: { label: "Mossy Rocks", file: "mossy-rocks.jpg", type: "image", original: "https://images.unsplash.com/photo-1516021262846-5ecb8bc13cb2?auto=format&fit=crop&w=300&q=80" },
  vaultItemSticksClutter: { label: "Sticks & Clutter", file: "sticks-clutter.jpg", type: "image", original: "https://images.unsplash.com/photo-1600889241951-b0db09da4181?auto=format&fit=crop&w=300&q=80" },
  vaultItemStreetTrash: { label: "Street Trash", file: "street-trash.jpg", type: "image", original: "https://images.unsplash.com/photo-1528324650630-6db72a1deab3?auto=format&fit=crop&w=300&q=80" },
  vaultItemAbandonedItems: { label: "Abandoned Items", file: "abandoned-items.jpg", type: "image", original: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80" },
  vaultItemConcreteRubble: { label: "Concrete Rubble", file: "concrete-rubble.jpg", type: "image", original: "https://images.unsplash.com/photo-1581417478175-a9ef18abecbc?auto=format&fit=crop&w=300&q=80" },
  vaultItemBrokenArchitecture: { label: "Broken Architecture", file: "broken-architecture.jpg", type: "image", original: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=300&q=80" },
  vaultItemBackgroundMountains: { label: "Background Mountains", file: "background-mountains.jpg", type: "image", original: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=300&q=80" },
  vaultItemTerrainMeshes: { label: "Terrain Meshes", file: "terrain-meshes.jpg", type: "image", original: "https://images.unsplash.com/photo-1529984920401-26780c85b51b?auto=format&fit=crop&w=300&q=80" },
  vaultItemOceanSurfaces: { label: "Ocean Surfaces", file: "ocean-surfaces.jpg", type: "image", original: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=300&q=80" },
  vaultItemPuddlesMurk: { label: "Puddles & Murk", file: "puddles-murk.jpg", type: "image", original: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=300&q=80" },
  vaultItemStreetGraffiti: { label: "Street Graffiti", file: "street-graffiti.jpg", type: "image", original: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=300&q=80" },
  vaultItemDirtGrime: { label: "Dirt & Grime", file: "dirt-grime.jpg", type: "image", original: "https://images.unsplash.com/photo-1506161183350-0a2a4651df09?auto=format&fit=crop&w=300&q=80" },

  // Development Roadmap
  roadmapCablesPipes: { label: "Procedural Cables & Pipes", file: "procedural-cables-pipes.jpg", type: "image", original: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=600&q=80" },
  roadmapUnderwaterBiomes: { label: "Underwater Biomes", file: "underwater-biomes.jpg", type: "image", original: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=600&q=80" },
};
