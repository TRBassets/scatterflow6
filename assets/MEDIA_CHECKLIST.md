# ScatterFlow Media Checklist

Put every replacement image or video directly in this single folder:

`assets/`

Then either:

1. Use the exact filenames listed below, or
2. Edit the `file` value for that slot in `js/media-paths.js`.

Supported image files: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg`, `.avif`.
Supported video files: `.mp4`, `.webm`, `.ogv`, `.mov`.

To turn an image slot into a video slot, change the file to a video filename, for example:

```js
featureInstantEcosystem: { label: "Instant ecosystem hero image", file: "instant-demo.mp4", type: "video" },
```

| Section | Key | Expected file | Type | Slot |
|---|---|---:|---|---|
| Hero | `heroTrailer` | `hero-trailer.mp4` | video | Hero trailer video |
| Community Reviews | `testimonialCgHorizonAvatar` | `cg-horizon-avatar.jpg` | image/video | CG Horizon avatar |
| Community Reviews | `testimonial3dForgeAvatar` | `3d-forge-avatar.jpg` | image/video | The 3D Forge avatar |
| Community Reviews | `testimonialPolyMasteryAvatar` | `polymastery-avatar.jpg` | image/video | PolyMastery avatar |
| Core Features | `featureInstantEcosystem` | `instant-ecosystem-creation.jpg` | image/video | Instant ecosystem hero image |
| Core Features | `featurePremadeEcosystems` | `premade-ecosystems.jpg` | image/video | Premade ecosystems card |
| Core Features | `featureInstantPopulation` | `instant-population.jpg` | image/video | Instant population card |
| Core Features | `featureOneClickWorkflow` | `one-click-workflow.jpg` | image/video | One-click workflow card |
| Ecosystem Presets | `biomeDenseForest` | `dense-forest.jpg` | image/video | Dense Forest slider |
| Ecosystem Presets | `biomeTropicalJungle` | `tropical-jungle.jpg` | image/video | Tropical Jungle slider |
| Ecosystem Presets | `biomeAquaticReef` | `aquatic-reef.jpg` | image/video | Aquatic Reef slider |
| Ecosystem Presets | `biomeAridWasteland` | `arid-wasteland.jpg` | image/video | Arid Wasteland slider |
| Ecosystem Presets | `biomeSpringMeadow` | `spring-meadow.jpg` | image/video | Spring Meadow slider |
| Advanced Scatter Engine | `scatterMaterialColorization` | `material-control-colorization.jpg` | image/video | Material Control & Colorization |
| Advanced Scatter Engine | `scatterPhysicsBasedScattering` | `physics-based-scattering.jpg` | image/video | Physics-Based Scattering |
| Advanced Scatter Engine | `scatterSpeedOptimization` | `speed-optimization.jpg` | image/video | Speed & Optimization |
| Advanced Scatter Engine | `scatterProceduralMasks` | `procedural-masks.jpg` | image/video | Procedural Masks |
| Advanced Scatter Engine | `scatterPrecisionControl` | `precision-control.jpg` | image/video | Precision Control |
| Advanced Scatter Engine | `scatterGrowthBehavior` | `growth-behavior.jpg` | image/video | Growth Behavior |
| Advanced Scatter Engine | `scatterGridArrays` | `grid-arrays.jpg` | image/video | Grid Arrays |
| Advanced Scatter Engine | `scatterIntegratedDecalSystem` | `integrated-decal-system.jpg` | image/video | Integrated Decal System |
| Advanced Scatter Engine | `scatterAltitudeSlope` | `altitude-slope.jpg` | image/video | Altitude & Slope |
| Atmospheric Systems | `weatherProceduralRain` | `procedural-rain.jpg` | image/video | Procedural Rain System |
| Atmospheric Systems | `weatherSurfaceCollision` | `surface-collision.jpg` | image/video | Surface Collision |
| Atmospheric Systems | `weatherRippleShader` | `ripple-shader.jpg` | image/video | Ripple Shader |
| Atmospheric Systems | `weatherAccumulatingSnow` | `accumulating-snow.jpg` | image/video | Accumulating Snow |
| Atmospheric Systems | `weatherSnowGroundCover` | `snow-ground-cover.jpg` | image/video | Snow Ground Cover |
| Fluid Dynamics | `waterFlowMapsFoam` | `flow-maps-foam.jpg` | image/video | Flow Maps & Foam |
| Fluid Dynamics | `waterRealisticCaustics` | `realistic-caustics.jpg` | image/video | Realistic Caustics |
| Fluid Dynamics | `waterShorelineScattering` | `shoreline-scattering.jpg` | image/video | Shoreline Scattering |
| Fluid Dynamics | `waterCollisionRipples` | `collision-ripples.jpg` | image/video | Collision Ripples |
| Fluid Dynamics | `waterBuoyancyDebris` | `buoyancy-debris.jpg` | image/video | Buoyancy & Debris |
| Water Presets | `waterPresetTropical` | `tropical.jpg` | image/video | Tropical water preset |
| Water Presets | `waterPresetLake` | `lake.jpg` | image/video | Lake water preset |
| Water Presets | `waterPresetRiver` | `river.jpg` | image/video | River water preset |
| Water Presets | `waterPresetPool` | `pool.jpg` | image/video | Pool water preset |
| Water Presets | `waterPresetClear` | `clear.jpg` | image/video | Clear water preset |
| Water Presets | `waterPresetPuddles` | `puddles.jpg` | image/video | Puddles water preset |
| Production Assets | `assetPbrMaterials` | `4k-pbr-materials.jpg` | image/video | 4K PBR Materials |
| Production Assets | `assetViewportOptimized` | `viewport-optimized.jpg` | image/video | Viewport Optimized |
| Asset Vault Tabs | `vaultTabFoliageNature` | `foliage-nature.jpg` | image/video | Foliage & Nature tab |
| Asset Vault Tabs | `vaultTabTrashDecay` | `trash-decay.jpg` | image/video | Trash & Decay tab |
| Asset Vault Tabs | `vaultTabDebrisRuins` | `debris-ruins.jpg` | image/video | Debris & Ruins tab |
| Asset Vault Tabs | `vaultTabLandscapes` | `landscapes.jpg` | image/video | Landscapes tab |
| Asset Vault Tabs | `vaultTabWaterSystems` | `water-systems.jpg` | image/video | Water Systems tab |
| Asset Vault Tabs | `vaultTabSurfaceDecals` | `surface-decals.jpg` | image/video | Surface Decals tab |
| Asset Vault Items | `vaultItemHighResTrees` | `high-res-trees.jpg` | image/video | High-Res Trees |
| Asset Vault Items | `vaultItemGrassWeeds` | `grass-weeds.jpg` | image/video | Grass & Weeds |
| Asset Vault Items | `vaultItemGreatBurdock` | `great-burdock.jpg` | image/video | Great Burdock |
| Asset Vault Items | `vaultItemStingingNettle` | `stinging-nettle.jpg` | image/video | Stinging Nettle |
| Asset Vault Items | `vaultItemMossyRocks` | `mossy-rocks.jpg` | image/video | Mossy Rocks |
| Asset Vault Items | `vaultItemSticksClutter` | `sticks-clutter.jpg` | image/video | Sticks & Clutter |
| Asset Vault Items | `vaultItemStreetTrash` | `street-trash.jpg` | image/video | Street Trash |
| Asset Vault Items | `vaultItemAbandonedItems` | `abandoned-items.jpg` | image/video | Abandoned Items |
| Asset Vault Items | `vaultItemConcreteRubble` | `concrete-rubble.jpg` | image/video | Concrete Rubble |
| Asset Vault Items | `vaultItemBrokenArchitecture` | `broken-architecture.jpg` | image/video | Broken Architecture |
| Asset Vault Items | `vaultItemBackgroundMountains` | `background-mountains.jpg` | image/video | Background Mountains |
| Asset Vault Items | `vaultItemTerrainMeshes` | `terrain-meshes.jpg` | image/video | Terrain Meshes |
| Asset Vault Items | `vaultItemOceanSurfaces` | `ocean-surfaces.jpg` | image/video | Ocean Surfaces |
| Asset Vault Items | `vaultItemPuddlesMurk` | `puddles-murk.jpg` | image/video | Puddles & Murk |
| Asset Vault Items | `vaultItemStreetGraffiti` | `street-graffiti.jpg` | image/video | Street Graffiti |
| Asset Vault Items | `vaultItemDirtGrime` | `dirt-grime.jpg` | image/video | Dirt & Grime |
| Development Roadmap | `roadmapCablesPipes` | `procedural-cables-pipes.jpg` | image/video | Procedural Cables & Pipes |
| Development Roadmap | `roadmapUnderwaterBiomes` | `underwater-biomes.jpg` | image/video | Underwater Biomes |
