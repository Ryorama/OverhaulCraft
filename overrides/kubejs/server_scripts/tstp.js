ServerEvents.recipes(event => {
	event.recipes.gtceu.extractor('fish_oil')         
        .itemInputs('#minecraft:fishes')
        .outputFluids('gtceu:fish_oil 60')
        .duration(16)
        .EUt(4)
		
	event.recipes.gtceu.extractor('fish_oil')         
        .itemInputs('#minecraft:fishes')
        .outputFluids('gtceu:fish_oil 60')
        .duration(16)
        .EUt(4)
		
	event.recipes.gtceu.extractor('canola_oil')         
        .itemInputs('car:canola')
        .outputFluids('car:canola_oil 1000')
        .duration(16)
        .EUt(4)
		
	event.recipes.gtceu.extractor('tin_can_extr')         
        .itemInputs('aquaculture:tin_can')
        .outputFluids('gtceu:iron 112')
        .duration(11)
        .EUt(30)
		
	event.recipes.gtceu.bender('canister')         
        .itemInputs('4x gtceu:polyethylene_plate')
        .itemOutputs('car:canister')
        .duration(200)
        .EUt(20)
	
	event.recipes.gtceu.bender('license_plate')         
        .itemInputs('gtceu:iron_plate')
        .itemOutputs('car:license_plate')
        .duration(200)
        .EUt(20)

        event.recipes.gtceu.centrifuge('uranium_235_cent')
         .inputFluids('gtceu:uranium_hexafluoride 1000')
         .itemOutputs('3x gtceu:uranium_small_dust', 'gtceu:uranium_235_tiny_dust')
         .duration(200)
         .EUt(320)

        event.recipes.gtceu.mixer('asphalt')         
        .itemInputs('4x minecraft:gravel')
	.inputFluids('ad_astra:oil 100')
        .itemOutputs('4x car:asphalt')
        .duration(100)
        .EUt(2) 
		
	event.recipes.gtceu.mixer('netherrack')         
        .itemInputs('minecraft:cobblestone')
	.inputFluids('minecraft:lava 100')
        .itemOutputs('minecraft:netherrack')
        .duration(100)
        .EUt(56) 
		
        event.recipes.gtceu.alloy_smelter('steel_carbon')         
        .itemInputs('minecraft:iron_ingot', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
        .EUt(2)

	event.recipes.gtceu.alloy_smelter('steel_coal')         
        .itemInputs('minecraft:iron_ingot', 'minecraft:coal')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.alloy_smelter('steel_charcoal')         
        .itemInputs('minecraft:iron_ingot', 'minecraft:charcoal')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.alloy_smelter('steel_coal_dust')         
        .itemInputs('minecraft:iron_ingot', 'gtceu:coal_dust')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.alloy_smelter('steel_charcoal_dust')         
        .itemInputs('minecraft:iron_ingot', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
        .EUt(2)

        event.recipes.gtceu.mixer('steel_carbon_mixer')         
        .itemInputs('gtceu:iron_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:steel_dust')
        .duration(400)
        .EUt(2)

	event.recipes.gtceu.mixer('steel_coal_dust_mixer')         
        .itemInputs('gtceu:iron_dust', 'gtceu:coal_dust')
        .itemOutputs('gtceu:steel_dust')
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.mixer('steel_charcoal_dust_mixer')         
        .itemInputs('gtceu:iron_dust', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:steel_dust')
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.alloy_smelter('netherite_scrap')         
        .itemInputs('16x minecraft:netherrack', '8x gtceu:rare_earth_dust')
        .itemOutputs('minecraft:netherite_scrap')
        .duration(400)
        .EUt(480)

        event.recipes.gtceu.forge_hammer('zinc_crushed_ore_fh')         
        .itemInputs('geolosys:zinc_cluster')
        .itemOutputs('gtceu:sphalerite_crushed_ore')
        .duration(10)
        .EUt(16)
	
        event.recipes.gtceu.macerator('zinc_crushed_ore')         
        .itemInputs('geolosys:zinc_cluster')
        .itemOutputs('gtceu:sphalerite_crushed_ore')
        .duration(400)
        .EUt(16)

	event.recipes.gtceu.macerator('bauxite_crushed_ore_imm')         
        .itemInputs('immersiveengineering:ore_aluminum')
        .itemOutputs('2x gtceu:bauxite_crushed_ore', 'gtceu:stone_dust')
	.chancedOutput('gtceu:grossular_gem', 1400, 0)
        .duration(400)
        .EUt(2) 
		
	event.recipes.gtceu.macerator('bauxite_crushed_ore_geo')         
        .itemInputs('geolosys:bauxite_ore')
        .itemOutputs('2x gtceu:bauxite_crushed_ore', 'gtceu:stone_dust')
	.chancedOutput('gtceu:grossular_gem', 1400, 0)
        .duration(400)
        .EUt(2)
		
	event.recipes.gtceu.macerator('aluminum_dust_cluster')         
        .itemInputs('geolosys:aluminum_cluster')
        .itemOutputs('2x gtceu:aluminium_crushed_ore', 'gtceu:stone_dust')
	.chancedOutput('gtceu:bauxite_dust', 1400, 0)
        .duration(400)
        .EUt(2)

        event.recipes.gtceu.assembler('ostrum_machine_casing')         
        .itemInputs('6x #forge:plates/ostrum', 'gtceu:ostrum_frame')
        .itemOutputs('2x gtceu_tstp:ostrum_machine_casing')
        .duration(49)
        .EUt(16)
        .circuit(6)
	
	event.recipes.gtceu.assembler('tank')         
        .itemInputs('16x gtceu:fluid_cell', '16x #forge:glass')
        .itemOutputs('car:tank')
        .duration(100)
        .EUt(2)
		
	event.recipes.gtceu.assembler('empty_casing')         
        .itemInputs('5x gtceu:copper_plate')
        .itemOutputs('5x immersiveengineering:empty_casing')
        .duration(100)
        .EUt(2)
		
	event.recipes.gtceu.assembler('empty_shell')
        .itemInputs('1x gtceu:copper_plate', '4x minecraft:paper', '2x minecraft:red_dye')
        .itemOutputs('3x immersiveengineering:empty_shell')
        .duration(100)
        .EUt(2)
		
	event.recipes.gtceu.assembler('car_workshop_outter')         
        .itemInputs('8x minecraft:gray_concrete', '8x gtceu:steel_plate')
        .itemOutputs('8x car:car_workshop_outter')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('car_workshop')         
        .itemInputs('minecraft:gray_concrete', 'gtceu:steel_plate', '4x minecraft:lime_dye', '4x minecraft:red_dye')
        .itemOutputs('car:car_workshop')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('engine_piston')         
        .itemInputs('8x gtceu:steel_plate')
        .itemOutputs('car:engine_piston')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('plane_engine')         
        .itemInputs('16x gtceu:steel_plate', '4x car:engine_piston')
        .itemOutputs('plane:plane_engine')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('engine_3_cylinder')         
        .itemInputs('16x gtceu:steel_plate', '3x car:engine_piston')
        .itemOutputs('car:engine_3_cylinder')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('small_tank')         
        .itemInputs('4x gtceu:steel_foil', '8x gtceu:polyethylene_plate')
        .itemOutputs('car:small_tank')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('wheel')         
        .itemInputs('gtceu:iron_plate', '2x gtceu:rubber_plate')
        .itemOutputs('car:wheel')
		.circuit(1)
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('plane_wheel')         
        .itemInputs('gtceu:iron_plate', '2x gtceu:rubber_plate')
        .itemOutputs('plane:plane_wheel')
		.circuit(2)
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('gas_station')         
        .itemInputs('#forge:circuits/mv', '16x gtceu:aluminium_plate', '4x gtceu:fluid_cell', 'gtceu:mv_electric_pump', 'gtceu:mv_electric_motor', 'gtceu:mv_machine_hull')
        .itemOutputs('car:gas_station')
        .duration(200)
        .EUt(56)

        event.recipes.gtceu.assembler('weather_siren')         
        .itemInputs('gtceu:good_electronic_circuit', '2x gtceu:mv_sensor', '8x gtceu:steel_plate', 'gtceu:mv_machine_hull', '4x supplementaries:speaker_block', '16x gtceu:copper_fine_wire')
        .itemOutputs('weather2:tornado_siren')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('basic_bullet')         
        .itemInputs('16x immersiveengineering:empty_casing', '16x minecraft:gunpowder')
        .itemOutputs('16x cgm:basic_bullet')
        .duration(400)
        .EUt(4)
		
	event.recipes.gtceu.assembler('advanced_bullet')         
        .itemInputs('16x immersiveengineering:empty_casing', '16x minecraft:gunpowder', '8x gtceu:steel_plate')
        .itemOutputs('16x cgm:advanced_bullet')
        .duration(450)
        .EUt(6)
		
        event.recipes.gtceu.assembler('grenade')         
        .itemInputs('4x gtceu:steel_ring', '16x minecraft:gunpowder', '16x gtceu:steel_foil', '4x gtceu:steel_bolt')
        .itemOutputs('4x cgm:grenade')
        .duration(200)
        .EUt(60)

        event.recipes.gtceu.assembler('stun_grenade')         
        .itemInputs('4x gtceu:steel_ring', '4x minecraft:glowstone_dust', '8x minecraft:gunpowder', '16x gtceu:steel_foil', '4x gtceu:steel_bolt')
        .itemOutputs('4x cgm:stun_grenade')
        .duration(200)
        .EUt(60)

	event.recipes.gtceu.assembler('shell')         
        .itemInputs('16x immersiveengineering:empty_shell', '16x minecraft:gunpowder', '8x gtceu:gold_plate')
        .itemOutputs('16x cgm:shell')
        .duration(450)
        .EUt(6)
		
	event.recipes.gtceu.assembler('pistol')         
        .itemInputs('16x gtceu:steel_foil', '8x gtceu:steel_small_spring', '8x gtceu:steel_rod', '16x gtceu:steel_bolt')
        .itemOutputs('cgm:pistol')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('shotgun')         
        .itemInputs('32x gtceu:steel_foil', '12x gtceu:steel_small_spring', '12x gtceu:steel_rod', '18x gtceu:steel_bolt')
        .itemOutputs('cgm:shotgun')
        .duration(260)
        .EUt(60)

        event.recipes.gtceu.assembler('rifle')         
        .itemInputs('48x gtceu:steel_foil', '18x gtceu:steel_small_spring', '16x gtceu:steel_rod', '24x gtceu:steel_bolt')
        .itemOutputs('cgm:rifle')
        .duration(250)
        .EUt(60)
	
	event.recipes.gtceu.assembler('solar_generator')         
        .itemInputs('gtceu:solar_panel', 'gtceu:mv_machine_hull')
        .itemOutputs('ad_astra:solar_panel')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('linker')         
        .itemInputs('8x gtceu:steel_foil', 'gtceu:mv_sensor', '4x gtceu:steel_bolt')
        .itemOutputs('webdisplays:linker')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('keyboard')         
        .itemInputs('16x gtceu:steel_foil', 'gtceu:mv_sensor', '8x gtceu:steel_bolt', '4x gtceu:steel_screw')
        .itemOutputs('webdisplays:keyboard')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('backlight')         
        .itemInputs('4x minecraft:glowstone_dust', '4x minecraft:paper', '4x minecraft:glass_pane')
        .itemOutputs('4x webdisplays:craftcomp_backlight')
        .duration(200)
        .EUt(20)
		
	event.recipes.gtceu.assembler('screen')         
        .itemInputs('16x webdisplays:craftcomp_backlight', '16x minecraft:glass_pane', '32x gtceu:steel_foil', '16x gtceu:steel_bolt', '4x gtceu:mv_emitter', '16x gtceu:gold_fine_wire')
        .itemOutputs('16x webdisplays:screen')
        .duration(200)
        .EUt(56)

        event.recipes.gtceu.assembler('hvac_system')         
        .itemInputs('gtceu:mv_machine_hull', '2x minecraft:ice', '2x minecraft:magma_block', '2x gtceu:steel_rotor', '16x gtceu:gold_fine_wire')
        .itemOutputs('1x tstp_content:hvac_block')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('oxygen_tank')         
        .itemInputs('4x gtceu:stainless_steel_foil', 'gtceu:fluid_cell')
        .itemOutputs('ad_astra:oxygen_tank')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('airlock')         
        .itemInputs('2x minecraft:iron_door', '32x gtceu:rubber_plate', '16x gtceu:steel_plate')
        .itemOutputs('ad_astra:airlock')
        .duration(200)
        .EUt(56)
	
	event.recipes.gtceu.assembler('water_pump')         
        .itemInputs('6x gtceu:steel_plate', '24x gtceu:steel_screw', '4x gtceu:gold_fine_wire', '#forge:circuits/mv', 'gtceu:mv_electric_pump', 'gtceu:mv_electric_motor', 'gtceu:mv_machine_hull', 'car:tank')
        .itemOutputs('ad_astra:water_pump')
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('oxygen_loader')         
        .itemInputs('6x gtceu:stainless_steel_plate', '24x gtceu:steel_screw', '4x gtceu:gold_fine_wire', '#forge:circuits/mv', '2x gtceu:steel_rotor', '2x gtceu:mv_electric_pump', 'gtceu:mv_electric_motor', 'gtceu:mv_machine_hull', '2x car:tank')
        .itemOutputs('ad_astra:oxygen_loader')
        .duration(200)
        .EUt(480)
		
	event.recipes.gtceu.assembler('oxygen_distributor')         
        .itemInputs('6x gtceu:stainless_steel_plate', '24x gtceu:steel_screw', '2x car:tank', '#forge:circuits/mv', '2x gtceu:stainless_steel_rotor', '2x gtceu:mv_electric_pump', '2x gtceu:mv_electric_motor', 'gtceu:mv_machine_hull', 'adpother:iron_filter_frame')
        .itemOutputs('ad_astra:oxygen_distributor')
        .duration(200)
        .EUt(480)
		
	event.recipes.gtceu.assembler('space_helmet')         
        .itemInputs('toughasnails:wool_helmet', '8x gtceu:lead_foil', '8x gtceu:polyethylene_foil', '4x minecraft:glass_pane')
        .itemOutputs('ad_astra:space_helmet')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('space_suit')         
        .itemInputs('toughasnails:wool_chestplate', '32x gtceu:lead_foil', '32x gtceu:polyethylene_foil', '2x ad_astra:oxygen_tank')
        .itemOutputs('ad_astra:space_suit')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('space_pants')         
        .itemInputs('toughasnails:wool_leggings', '16x gtceu:lead_foil', '16x gtceu:polyethylene_foil')
        .itemOutputs('ad_astra:space_pants')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('space_boots')         
        .itemInputs('toughasnails:wool_boots', '4x gtceu:lead_foil', '4x gtceu:polyethylene_foil')
        .itemOutputs('ad_astra:space_boots')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('launch_pad')         
        .itemInputs('16x gtceu:aluminium_plate')
        .itemOutputs('ad_astra:launch_pad')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('steel_tank')         
        .itemInputs('4x gtceu:steel_plate', '8x gtceu:aluminium_foil')
        .itemOutputs('ad_astra:steel_tank')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('desh_tank')         
        .itemInputs('4x ad_astra:desh_plate', '8x gtceu:desh_foil')
        .itemOutputs('ad_astra:desh_tank')
        .duration(400)
        .EUt(480)

        event.recipes.gtceu.assembler('ostrum_tank')         
        .itemInputs('4x #forge:plates/ostrum', '8x gtceu:ostrum_foil')
        .itemOutputs('ad_astra:ostrum_tank')
        .duration(400)
        .EUt(480)

        event.recipes.gtceu.assembler('calorite_tank')         
        .itemInputs('4x #forge:plates/calorite', '8x gtceu:calorite_foil')
        .itemOutputs('ad_astra:calorite_tank')
        .duration(400)
        .EUt(480)
		
	event.recipes.gtceu.assembler('rocket_fin')         
        .itemInputs('8x gtceu:steel_plate', '16x gtceu:aluminium_foil')
        .itemOutputs('2x ad_astra:rocket_fin')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('rocket_nose_cone')         
        .itemInputs('16x gtceu:steel_plate', '16x gtceu:aluminium_foil', 'minecraft:redstone_torch')
        .itemOutputs('ad_astra:rocket_nose_cone')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('steel_engine')         
        .itemInputs('32x gtceu:steel_plate', '32x gtceu:aluminium_foil', '2x ad_astra:steel_tank')
        .itemOutputs('ad_astra:steel_engine')
        .duration(400)
        .EUt(56)
		
	event.recipes.gtceu.assembler('desh_engine')         
        .itemInputs('32x ad_astra:desh_plate', '32x gtceu:desh_foil', '2x ad_astra:desh_tank')
        .itemOutputs('ad_astra:desh_engine')
        .duration(600)
        .EUt(480)

        event.recipes.gtceu.assembler('ostrum_engine')         
        .itemInputs('32x #forge:plates/ostrum', '32x gtceu:ostrum_foil', '2x ad_astra:ostrum_tank')
        .itemOutputs('ad_astra:ostrum_engine')
        .duration(600)
        .EUt(480)

        event.recipes.gtceu.assembler('calorite_engine')         
        .itemInputs('32x #forge:plates/calorite', '32x gtceu:calorite_foil', '2x ad_astra:calorite_tank')
        .itemOutputs('ad_astra:calorite_engine')
        .duration(600)
        .EUt(480)
		
	event.recipes.gtceu.assembler('tier_1_rocket')         
        .itemInputs('4x ad_astra:steel_tank', '4x ad_astra:rocket_fin', 'ad_astra:steel_engine', 'ad_astra:rocket_nose_cone', '48x gtceu:steel_plate', '32x gtceu:aluminium_foil')
        .itemOutputs('ad_astra:tier_1_rocket')
        .duration(800)
        .EUt(480)
		
	event.recipes.gtceu.assembler('tier_2_rocket_1')         
        .itemInputs('4x ad_astra:desh_tank', '4x ad_astra:rocket_fin', 'ad_astra:desh_engine', 'ad_astra:rocket_nose_cone', '48x ad_astra:desh_plate', '32x gtceu:desh_foil')
        .itemOutputs('ad_astra:tier_2_rocket')
        .duration(800)
        .EUt(1920)
		
	event.recipes.gtceu.assembler('tier_2_rocket_2')         
        .itemInputs('ad_astra:tier_1_rocket', '32x ad_astra:desh_plate', '32x gtceu:desh_foil')
        .itemOutputs('ad_astra:tier_2_rocket')
        .duration(400)
        .EUt(1920)

        event.recipes.gtceu.assembler('tier_3_rocket_1')         
        .itemInputs('4x ad_astra:ostrum_tank', '4x ad_astra:rocket_fin', 'ad_astra:ostrum_engine', 'ad_astra:rocket_nose_cone', '48x #forge:plates/ostrum', '32x gtceu:ostrum_foil')
        .itemOutputs('ad_astra:tier_3_rocket')
        .duration(800)
        .EUt(1920)
		
	event.recipes.gtceu.assembler('tier_3_rocket_2')         
        .itemInputs('ad_astra:tier_2_rocket', '32x #forge:plates/ostrum', '32x gtceu:ostrum_foil')
        .itemOutputs('ad_astra:tier_3_rocket')
        .duration(400)
        .EUt(1920)

        event.recipes.gtceu.assembler('tier_4_rocket_1')         
        .itemInputs('4x ad_astra:calorite_tank', '4x ad_astra:rocket_fin', 'ad_astra:calorite_engine', 'ad_astra:rocket_nose_cone', '48x #forge:plates/calorite', '32x gtceu:calorite_foil')
        .itemOutputs('ad_astra:tier_4_rocket')
        .duration(800)
        .EUt(2400)
		
	event.recipes.gtceu.assembler('tier_4_rocket_2')         
        .itemInputs('ad_astra:tier_3_rocket', '32x #forge:plates/calorite', '32x gtceu:calorite_foil')
        .itemOutputs('ad_astra:tier_4_rocket')
        .duration(400)
        .EUt(2400)
		
	event.recipes.gtceu.assembler('netherite_space_helmet')         
        .itemInputs('ad_astra:space_helmet', 'minecraft:netherite_ingot')
	.inputFluids('minecraft:lava 1000')
        .itemOutputs('ad_astra:netherite_space_helmet')
        .duration(800)
        .EUt(480)
	
	event.recipes.gtceu.assembler('netherite_space_suit')         
        .itemInputs('ad_astra:space_suit', 'minecraft:netherite_ingot')
	.inputFluids('minecraft:lava 1000')
        .itemOutputs('ad_astra:netherite_space_suit')
        .duration(800)
        .EUt(480)
	
	event.recipes.gtceu.assembler('netherite_space_pants')         
        .itemInputs('ad_astra:space_pants', 'minecraft:netherite_ingot')
	.inputFluids('minecraft:lava 1000')
        .itemOutputs('ad_astra:netherite_space_pants')
        .duration(800)
        .EUt(480)
	
	event.recipes.gtceu.assembler('netherite_space_boots')         
        .itemInputs('ad_astra:space_boots', 'minecraft:netherite_ingot')		
	.inputFluids('minecraft:lava 1000')
        .itemOutputs('ad_astra:netherite_space_boots')
        .duration(800)
        .EUt(480)
		
	event.recipes.gtceu.chemical_reactor('bio_diesel_eth')
	.itemInputs('gtceu:sodium_hydroxide_tiny_dust')
        .inputFluids('car:canola_oil 2000', 'gtceu:ethanol 1000')
        .outputFluids('gtceu:glycerol 1000', 'gtceu:bio_diesel 3000')
        .duration(900)
        .EUt(30)
		
	event.recipes.gtceu.chemical_reactor('bio_diesel_meth')
	.itemInputs('gtceu:sodium_hydroxide_tiny_dust')
        .inputFluids('car:canola_oil 2000', 'gtceu:methanol 1000')
        .outputFluids('gtceu:glycerol 1000', 'gtceu:bio_diesel 3000')
        .duration(900)
        .EUt(30)
		
	event.recipes.gtceu.chemical_reactor('rocket_fuel')         
        .inputFluids('gtceu:oxygen 100', 'gtceu:hydrogen 100')
        .outputFluids('ad_astra:fuel 100')
	.circuit(1)
        .duration(200)
        .EUt(56)
		
	event.recipes.gtceu.assembler('oak_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:oak_planks')
	.itemOutputs('plane:plane_oak')
        .duration(800)
        .EUt(56)
		
	event.recipes.gtceu.assembler('birch_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:birch_planks')
	.itemOutputs('plane:plane_birch')
        .duration(800)
        .EUt(56)
		
	event.recipes.gtceu.assembler('spruce_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:spruce_planks')
	.itemOutputs('plane:plane_spruce')
        .duration(800)
        .EUt(56)
		
	event.recipes.gtceu.assembler('jungle_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:jungle_planks')
	.itemOutputs('plane:plane_jungle')
        .duration(800)
        .EUt(56)
		
	event.recipes.gtceu.assembler('acacia_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:acacia_planks')
	.itemOutputs('plane:plane_acacia')
        .duration(800)
        .EUt(56)
		
	event.recipes.gtceu.assembler('dark_oak_plane')         
        .itemInputs('plane:plane_engine', '2x plane:plane_wheel', 'car:small_tank', '16x minecraft:dark_oak_planks')
	.itemOutputs('plane:plane_dark_oak')
        .duration(800)
        .EUt(56)

        event.recipes.gtceu.assembler('basic_reactor_controller')         
        .itemInputs('bigreactors:basic_reactorcasing', '2x #forge:circuits/hv', '6x gtceu:lead_plate')
	.itemOutputs('bigreactors:basic_reactorcontroller')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('basic_reactor_control_rod')         
        .itemInputs('bigreactors:basic_reactorcasing', '6x gtceu:cobalt_plate', '4x gtceu:cobalt_rod', '6x gtceu:lead_plate')
	.itemOutputs('bigreactors:basic_reactorcontrolrod')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('basic_reactor_solid_access_port')         
        .itemInputs('bigreactors:basic_reactorcasing', 'gtceu:mv_conveyor_module', '6x gtceu:lead_plate')
	.itemOutputs('bigreactors:basic_reactorsolidaccessport')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('basic_reactor_active_power_tap')         
        .itemInputs('bigreactors:basic_reactorcasing', 'gtceu:mv_voltage_coil', '6x gtceu:lead_plate')
	.itemOutputs('bigreactors:basic_reactorpowertapfe_active')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('basic_reactor_fuel_rod')         
        .itemInputs('gtceu:cobalt_plate', '12x gtceu:cobalt_rod', '4x gtceu:lead_dust')
	.itemOutputs('bigreactors:basic_reactorfuelrod')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('weather_deflector')         
        .itemInputs('gtceu:ev_machine_hull', '2x gtceu:ev_emitter', 'gtceu:ev_field_generator', '#forge:circuits/ev')
	.itemOutputs('weather2:weather_deflector')
        .duration(1200)
        .EUt(1920)
	
        event.recipes.gtceu.electric_blast_furnace('basic_reactor_casing')         
        .itemInputs('#forge:storage_blocks/lead', '9x #forge:dusts/graphite')
        .itemOutputs('bigreactors:basic_reactorcasing')
        .duration(200)
        .EUt(56)
        .blastFurnaceTemp(1400)

        event.recipes.gtceu.electric_blast_furnace('desh_ingot')         
        .itemInputs('ad_astra:raw_desh')
        .itemOutputs('ad_astra:desh_ingot')
        .duration(600)
        .EUt(480)
        .blastFurnaceTemp(1700)
        .circuit(1)

	event.recipes.gtceu.electric_blast_furnace('ostrum_ingot')         
        .itemInputs('ad_astra:raw_ostrum')
        .itemOutputs('ad_astra:ostrum_ingot')
        .duration(1200)
        .EUt(480)
        .blastFurnaceTemp(1700)
        .circuit(1)

        event.recipes.gtceu.electric_blast_furnace('calorite_ingot')         
        .itemInputs('ad_astra:raw_calorite')
        .itemOutputs('ad_astra:calorite_ingot')
        .duration(1400)
        .EUt(480)
        .blastFurnaceTemp(2000)
        .circuit(1)

        event.recipes.gtceu.electric_blast_furnace('desh_ingot_2')         
        .itemInputs('ad_astra:raw_desh')
        .inputFluids('gtceu:nitrogen 500')
        .itemOutputs('ad_astra:desh_ingot')
        .duration(300)
        .EUt(480)
        .blastFurnaceTemp(1700)        
        .circuit(2)

	event.recipes.gtceu.electric_blast_furnace('ostrum_ingot_2')         
        .itemInputs('ad_astra:raw_ostrum')
        .inputFluids('gtceu:nitrogen 500')
        .itemOutputs('ad_astra:ostrum_ingot')
        .duration(600)
        .EUt(480)
        .blastFurnaceTemp(1700)
        .circuit(2)

        event.recipes.gtceu.electric_blast_furnace('calorite_ingot_2')         
        .itemInputs('ad_astra:raw_calorite')
        .inputFluids('gtceu:nitrogen 500')
        .itemOutputs('ad_astra:calorite_ingot')
        .duration(700)
        .EUt(480)
        .blastFurnaceTemp(2000)
        .circuit(2)

        event.recipes.gtceu.electric_blast_furnace('calorite_ingot_2')         
        .itemInputs('ad_astra:raw_calorite')
        .inputFluids('gtceu:nitrogen 500')
        .itemOutputs('ad_astra:calorite_ingot')
        .duration(700)
        .EUt(480)
        .blastFurnaceTemp(2000)
        .circuit(2)

        event.recipes.gtceu.electric_blast_furnace('boron_carbide')         
        .itemInputs('4x gtceu:boron_dust', 'gtceu:carbon_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .itemOutputs('gtceu:boron_carbide_ingot')
        .duration(700)
        .EUt(480)
        .blastFurnaceTemp(2620)
        .circuit(1)

        event.recipes.gtceu.cryo_freezer('cryo_fuel')
        .itemInputs('16x ad_astra:ice_shard')
        .inputFluids('ad_astra:fuel 500', 'gtceu:nitrogen 200')
        .outputFluids('ad_astra:cryo_fuel 1000')
        .duration(400)
        .EUt(480)

        event.recipes.gtceu.basic_drilling_rig('cobblestone_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(0)
        .itemOutputs('64x minecraft:cobblestone')
        .duration(2400)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('coal_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(1)
        .itemOutputs('16x minecraft:coal')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('iron_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(2)
        .itemOutputs('16x minecraft:raw_iron')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('copper_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(3)
        .itemOutputs('16x minecraft:raw_copper')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('lead_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(4)
        .itemOutputs('16x gtceu:raw_lead')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('tin_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(5)
        .itemOutputs('16x gtceu:raw_tin')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('nickel_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(6)
        .itemOutputs('16x gtceu:raw_nickel')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('sphalerite_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(7)
        .itemOutputs('16x gtceu:raw_sphalerite')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('realgar_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(8)
        .itemOutputs('16x gtceu:realgar_gem')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('redstone_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(9)
        .itemOutputs('16x gtceu:raw_redstone')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('silver_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(10)
        .itemOutputs('16x gtceu:raw_silver')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('uranium_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(11)
        .itemOutputs('16x gtceu:raw_uraninite')
        .duration(1200)
        .EUt(6)

        event.recipes.gtceu.basic_drilling_rig('andesite_basic')
        .notConsumable('gtceu:iron_drill_head')
        .circuit(12)
        .itemOutputs('64x minecraft:andesite')
        .duration(2400)
        .EUt(6)
});

LootJS.modifiers((event) => {
        //Chest Loot
        event.addLootTypeModifier(LootType.CHEST).removeLoot("irons_spellbooks:scroll");
        event.addLootTypeModifier(LootType.CHEST).removeLoot("irons_spellbooks:arcane_essence");

        //Block Loot
        event.addBlockLootModifier("weather2:tornado_siren").addLoot("weather2:tornado_siren");
        event.addBlockLootModifier("weather2:weather_deflector").addLoot("weather2:weather_deflector")
});