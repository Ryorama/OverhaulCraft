import mods.create.PressingManager;
import mods.create.MixingManager;
import mods.create.CrushingManager;
import mods.create.MechanicalCrafterManager;
import mods.immersiveengineering.BlastFurnace;
import mods.immersiveengineering.BlastFurnaceFuel;
import mods.immersiveengineering.Blueprint;
import mods.immersiveengineering.Crusher;

craftingTable.removeByModid("ad_astra");
craftingTable.removeByModid("weather2");
craftingTable.removeByModid("computercraft");
craftingTable.removeByModid("car");
craftingTable.removeByModid("plane");
craftingTable.removeByModid("ballistix");
craftingTable.removeByModid("blastcraft");
craftingTable.removeByModid("cgm");
craftingTable.removeByModid("ironjetpacks");
craftingTable.removeByModid("irons_spellbooks");
craftingTable.removeByModid("ironjetpacks");
craftingTable.removeByModid("nuclearscience");
craftingTable.removeByModid("electrodynamics");
craftingTable.removeByModid("ballistix");
craftingTable.removeByModid("bigreactors");
craftingTable.removeByModid("webdisplays");
craftingTable.removeByModid("simpleplanes");
craftingTable.removeByModid("nuclearcraft");
furnace.removeByModid("bigreactors");
furnace.removeByModid("nuclearcraft");
blastFurnace.removeByModid("bigreactors");
blastFurnace.removeByModid("nuclearcraft");
<recipetype:immersiveengineering:blast_furnace>.removeAll();
<recipetype:immersiveengineering:blueprint>.removeAll();
<recipetype:immersiveengineering:crusher>.removeAll();

furnace.removeByRegex(".*steel.*");
furnace.remove(<tag:items:forge:ingots/aluminum>);
furnace.remove(<item:ad_astra:desh_ingot>);
furnace.remove(<item:ad_astra:ostrum_ingot>);
furnace.remove(<item:ad_astra:calorite_ingot>);
blastFurnace.removeByRegex(".*steel.*");
blastFurnace.remove(<tag:items:forge:ingots/aluminum>);
blastFurnace.remove(<item:ad_astra:desh_ingot>);
blastFurnace.remove(<item:ad_astra:ostrum_ingot>);
blastFurnace.remove(<item:ad_astra:calorite_ingot>);

craftingTable.remove(<item:minecraft:bucket>);
craftingTable.remove(<tag:items:forge:plates/steel>);
craftingTable.remove(<item:immersiveengineering:dust_aluminum>);
craftingTable.remove(<item:immersiveengineering:windmill>);
craftingTable.remove(<item:immersiveengineering:watermill>);
craftingTable.remove(<item:immersiveengineering:gunpart_hammer>);
craftingTable.remove(<item:immersiveengineering:gunpart_drum>);
craftingTable.remove(<item:gtceu:resin_circuit_board>);
craftingTable.remove(<item:candylands:warped_pop>);
craftingTable.remove(<item:create_new_age:reactor_casing>);
craftingTable.remove(<item:create_new_age:reactor_fuel_acceptor>);
craftingTable.remove(<item:create_new_age:reactor_glass>);
craftingTable.remove(<item:create_new_age:reactor_heat_vent>);
craftingTable.remove(<item:create_new_age:reactor_rod>);
craftingTable.remove(<item:create_new_age:reactor_casing>);
craftingTable.remove(<item:immersiveengineering:blastbrick>);
craftingTable.remove(<item:tstp_content:hvac_block>);
craftingTable.remove(<tag:items:vs_eureka:balloons>);

furnace.remove(<item:immersiveengineering:ingot_aluminum>);

craftingTable.removeByInput(<item:immersiveengineering:hammer>);

campfire.addRecipe("sugar_cod", <item:candylands:cooked_sugar_cod>, <item:candylands:raw_sugar_cod>, 1.0, 600);

craftingTable.addShapeless("ad_oxy_to_greg", <item:gtceu:oxygen_bucket>, [<item:ad_astra:oxygen_bucket>.transformDamage()]);
craftingTable.addShapeless("greg_oxy_to_ad", <item:ad_astra:oxygen_bucket>, [<item:gtceu:oxygen_bucket>.transformDamage()]);
craftingTable.addShapeless("greg_bd_to_car", <item:car:bio_diesel_bucket>, [<item:gtceu:bio_diesel_bucket>.transformDamage()]);
craftingTable.addShapeless("car_bd_to_greg", <item:gtceu:bio_diesel_bucket>, [<item:car:bio_diesel_bucket>.transformDamage()]);
craftingTable.addShapeless("glass_tube", <item:gtceu:glass_tube>, [<item:minecraft:glass>]);
craftingTable.addShapeless("steel_cable_to_aa", <item:ad_astra:steel_cable>, [<item:gtceu:steel_single_wire>]);
craftingTable.addShapeless("steel_cable_to_gtceu", <item:gtceu:steel_single_wire>, [<item:ad_astra:steel_cable>]);
craftingTable.addShapeless("desh_cable_to_aa", <item:ad_astra:desh_cable>, [<item:gtceu:desh_single_wire>]);
craftingTable.addShapeless("desh_cable_to_gtceu", <item:gtceu:desh_single_wire>, [<item:ad_astra:desh_cable>]);
	
craftingTable.addShaped("magnetic_iron_ingot", <item:gtceu:magnetic_iron_ingot>, [ 
	[<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>], 
    [<item:minecraft:redstone>, <item:minecraft:iron_ingot>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

craftingTable.addShaped("magnetite_block", <item:create_new_age:magnetite_block>, [ 
	[<item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>], 
    [<item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>],
	[<item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>, <item:gtceu:magnetic_iron_ingot>]]);

craftingTable.addShaped("plane_wrench", <item:plane:wrench>, [ 
	[<item:gtceu:steel_rod>, <item:minecraft:air>, <item:gtceu:steel_rod>], 
    [<item:gtceu:steel_bolt>, <item:gtceu:steel_plate>, <item:gtceu:steel_bolt>],
	[<item:minecraft:air>, <item:gtceu:steel_rod>, <item:minecraft:air>]]);
	
craftingTable.addShaped("painter", <item:car:painter>, [ 
	[<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>], 
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>],
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);
	
craftingTable.addShaped("yellow_painter", <item:car:painter_yellow>, [ 
	[<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>], 
    [<item:minecraft:yellow_dye>, <item:minecraft:yellow_dye>, <item:minecraft:yellow_dye>],
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);
	
craftingTable.addShaped("oak_car_body", <item:car:oak_body>, [ 
	[<item:minecraft:air>, <item:minecraft:oak_planks>, <item:minecraft:oak_planks>], 
    [<item:minecraft:oak_planks>, <item:minecraft:oak_planks>, <item:minecraft:oak_planks>],
	[<item:minecraft:oak_planks>, <item:minecraft:oak_planks>, <item:minecraft:oak_planks>]]);
	
craftingTable.addShaped("birch_car_body", <item:car:birch_body>, [ 
	[<item:minecraft:air>, <item:minecraft:birch_planks>, <item:minecraft:birch_planks>], 
    [<item:minecraft:birch_planks>, <item:minecraft:birch_planks>, <item:minecraft:birch_planks>],
	[<item:minecraft:birch_planks>, <item:minecraft:birch_planks>, <item:minecraft:birch_planks>]]);	
	
craftingTable.addShaped("spruce_car_body", <item:car:spruce_body>, [ 
	[<item:minecraft:air>, <item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>], 
    [<item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>],
	[<item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>]]);
	
craftingTable.addShaped("jungle_car_body", <item:car:jungle_body>, [ 
	[<item:minecraft:air>, <item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>], 
    [<item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>],
	[<item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>]]);	
	
craftingTable.addShaped("acacia_car_body", <item:car:acacia_body>, [ 
	[<item:minecraft:air>, <item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>], 
    [<item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>],
	[<item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>]]);

craftingTable.addShaped("dark_oak_car_body", <item:car:dark_oak_body>, [ 
	[<item:minecraft:air>, <item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>], 
    [<item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>],
	[<item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>]]);
	
craftingTable.addShaped("oak_bumper", <item:car:oak_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:oak_planks>, <item:minecraft:oak_planks>, <item:minecraft:oak_planks>]]);
	
craftingTable.addShaped("birch_bumper", <item:car:birch_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:birch_planks>, <item:minecraft:birch_planks>, <item:minecraft:birch_planks>]]);
	
craftingTable.addShaped("spruce_bumper", <item:car:spruce_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>]]);
	
craftingTable.addShaped("jungle_bumper", <item:car:jungle_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>]]);
	
craftingTable.addShaped("acacia_bumper", <item:car:acacia_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>]]);
	
craftingTable.addShaped("dark_oak_bumper", <item:car:dark_oak_bumper>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>]]);
	
craftingTable.addShaped("oak_license_plate_holder", <item:car:oak_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:oak_planks>, <item:minecraft:oak_planks>]]);
	
craftingTable.addShaped("birch_license_plate_holder", <item:car:birch_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:birch_planks>, <item:minecraft:birch_planks>]]);
	
craftingTable.addShaped("spruce_license_plate_holder", <item:car:spruce_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>]]);
	
craftingTable.addShaped("jungle_license_plate_holder", <item:car:jungle_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>]]);
	
craftingTable.addShaped("acacia_license_plate_holder", <item:car:acacia_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>]]);
	
craftingTable.addShaped("dark_oak_license_plate_holder", <item:car:dark_oak_license_plate_holder>, [ 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>]]);
	
craftingTable.addShaped("compressed_fireclay", <item:gtceu:compressed_fireclay>, [ 
	[<item:gtceu:fireclay_dust>, <item:gtceu:fireclay_dust>, <item:minecraft:air>], 
    [<item:gtceu:fireclay_dust>, <item:gtceu:fireclay_dust>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
	
craftingTable.addShaped("blastbrick", <item:immersiveengineering:blastbrick> * 3, [ 
	[<item:gtceu:firebrick>, <item:gtceu:firebrick>, <item:minecraft:air>], 
    [<item:gtceu:firebrick>, <item:gtceu:firebrick>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
	
craftingTable.addShaped("resin_circuit_board_1", <item:gtceu:resin_circuit_board>, [ 
	[<tag:items:minecraft:planks>, <item:gtceu:sticky_resin>, <item:minecraft:air>], 
    [<item:gtceu:sticky_resin>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
	
craftingTable.addShaped("resin_circuit_board_2", <item:gtceu:resin_circuit_board> * 3, [ 
	[<item:gtceu:sticky_resin>, <item:gtceu:sticky_resin>, <item:gtceu:sticky_resin>], 
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
	[<item:gtceu:sticky_resin>, <item:gtceu:sticky_resin>, <item:gtceu:sticky_resin>]]);
	
craftingTable.addShaped("coal_generator", <item:ad_astra:coal_generator>, [ 
	[<tag:items:forge:plates/steel>, <tag:items:forge:plates/steel>, <tag:items:forge:plates/steel>], 
    [<item:gtceu:lv_machine_hull>, <item:minecraft:furnace>, <tag:items:forge:circuits/lv>],
	[<tag:items:forge:plates/steel>, <tag:items:forge:plates/steel>, <tag:items:forge:plates/steel>]]);	
	
craftingTable.addShaped("windmill", <item:immersiveengineering:windmill>, [ 
	[<item:immersiveengineering:windmill_blade>, <item:immersiveengineering:windmill_blade>, <item:immersiveengineering:windmill_blade>], 
    [<item:immersiveengineering:windmill_blade>, <tag:items:forge:ingots/steel>, <item:immersiveengineering:windmill_blade>],
	[<item:immersiveengineering:windmill_blade>, <item:immersiveengineering:windmill_blade>, <item:immersiveengineering:windmill_blade>]]);	

craftingTable.addShaped("water_wheel", <item:immersiveengineering:watermill>, [ 
	[<item:minecraft:air>, <item:immersiveengineering:waterwheel_segment>, <item:minecraft:air>], 
    [<item:immersiveengineering:waterwheel_segment>, <tag:items:forge:ingots/steel>, <item:immersiveengineering:waterwheel_segment>],
	[<item:minecraft:air>, <item:immersiveengineering:waterwheel_segment>, <item:minecraft:air>]]);	

craftingTable.addShaped("ostrum_machine_casing", <item:gtceu_tstp:ostrum_machine_casing> * 2, [ 
	[<tag:items:forge:plates/ostrum>, <tag:items:forge:tools/hammers>, <tag:items:forge:plates/ostrum>], 
    [<tag:items:forge:plates/ostrum>, <item:gtceu:ostrum_frame>, <tag:items:forge:plates/ostrum>],
	[<tag:items:forge:plates/ostrum>, <tag:items:forge:tools/wrenches>, <tag:items:forge:plates/ostrum>]]);	

craftingTable.addShaped("cryo_freezer", <item:gtceu:cryo_freezer>, [ 
	[<item:gtceu:stainless_steel_rotor>, <item:gtceu:vacuum_freezer>, <item:gtceu:stainless_steel_rotor>], 
    [<tag:items:forge:circuits/ev>, <item:gtceu_tstp:ostrum_machine_casing>, <tag:items:forge:circuits/ev>],
	[<item:gtceu:gold_single_cable>, <tag:items:forge:circuits/ev>, <item:gtceu:gold_single_cable>]]);	

furnace.addRecipe("wrought_iron", <item:gtceu:wrought_iron_ingot>, <item:minecraft:iron_ingot>, 1.0, 200);
furnace.addRecipe("uranium_ingot", <item:gtceu:uranium_ingot>, <item:bigreactors:yellorite_ore>, 1.0, 200);
blastFurnace.addRecipe("uranium_ingot_blast", <item:gtceu:uranium_ingot>, <item:bigreactors:yellorite_ore>, 1.0, 100);

//CreateTweaker Recipes
<recipetype:create:pressing>.addRecipe("iron_plate", [<item:gtceu:iron_plate>], <item:minecraft:iron_ingot>, 200);
<recipetype:create:pressing>.addRecipe("wrought_iron_plate", [<item:gtceu:wrought_iron_plate>], <item:gtceu:wrought_iron_ingot>, 200);
<recipetype:create:pressing>.addRecipe("tin_plate", [<item:gtceu:tin_plate>], <item:gtceu:tin_ingot>, 200);
<recipetype:create:pressing>.addRecipe("nickel_plate", [<item:gtceu:nickel_plate>], <item:gtceu:nickel_ingot>, 200);
<recipetype:create:pressing>.addRecipe("steel_plate", [<item:gtceu:steel_plate>], <tag:items:forge:ingots/steel>, 200);
<recipetype:create:pressing>.addRecipe("copper_plate", [<item:gtceu:copper_plate>], <item:minecraft:copper_ingot>, 200);
<recipetype:create:pressing>.addRecipe("bronze_plate", [<item:gtceu:bronze_plate>], <item:gtceu:bronze_ingot>, 200);
<recipetype:create:pressing>.addRecipe("zinc_plate", [<item:gtceu:zinc_plate>], <tag:items:forge:ingots/zinc>, 200);
<recipetype:create:pressing>.addRecipe("osmium_plate", [<item:gtceu:osmium_plate>], <tag:items:forge:ingots/osmium>, 200);
<recipetype:create:pressing>.addRecipe("lead_plate", [<item:gtceu:lead_plate>], <tag:items:forge:ingots/lead>, 200);
<recipetype:create:pressing>.addRecipe("rubber_plate", [<item:gtceu:rubber_plate>], <item:gtceu:sticky_resin>, 200);
<recipetype:create:pressing>.addRecipe("red_alloy_plate", [<item:gtceu:red_alloy_plate>], <item:gtceu:red_alloy_ingot>, 200);
<recipetype:create:pressing>.addRecipe("cupronickel_plate", [<item:gtceu:cupronickel_plate>], <item:gtceu:cupronickel_ingot>, 200);
<recipetype:create:pressing>.addRecipe("invar_plate", [<item:gtceu:invar_plate>], <item:gtceu:invar_ingot>, 200);

<recipetype:create:mixing>.addRecipe("steel_dust_w_coal", <constant:create:heat_condition:none>, [<item:gtceu:steel_dust> * 2], [<item:gtceu:iron_dust>, <item:gtceu:coal_dust>]);
<recipetype:create:mixing>.addRecipe("steel_dust_w_charcoal", <constant:create:heat_condition:none>, [<item:gtceu:steel_dust> * 2], [<item:gtceu:iron_dust>, <item:gtceu:charcoal_dust>]);
<recipetype:create:mixing>.addRecipe("steel_dust_w_carbon", <constant:create:heat_condition:none>, [<item:gtceu:steel_dust> * 2], [<item:gtceu:iron_dust>, <item:gtceu:carbon_dust>]);
<recipetype:create:mixing>.addRecipe("red_alloy_dust_mix", <constant:create:heat_condition:none>, [<item:gtceu:red_alloy_dust> * 2], [<item:minecraft:redstone> * 4, <tag:items:forge:dusts/copper>]);
<recipetype:create:mixing>.addRecipe("cupronickel_dust", <constant:create:heat_condition:none>, [<item:gtceu:cupronickel_dust> * 2], [<tag:items:forge:dusts/nickel>, <tag:items:forge:dusts/copper>]);
<recipetype:create:mixing>.addRecipe("invar_dust", <constant:create:heat_condition:none>, [<item:gtceu:invar_dust> * 3], [<tag:items:forge:dusts/iron> * 2, <tag:items:forge:dusts/nickel>]);
<recipetype:create:mixing>.remove(<item:immersiveengineering:dust_constantan>);

<recipetype:create:crushing>.addRecipe("clay_dust", [<item:gtceu:clay_dust>], <item:minecraft:clay_ball>, 200);
<recipetype:create:crushing>.addRecipe("brick_dust", [<item:gtceu:brick_dust>], <item:minecraft:brick>, 200);
<recipetype:create:crushing>.addRecipe("iron_dust", [<item:gtceu:iron_dust>], <item:minecraft:iron_ingot>, 200);
<recipetype:create:crushing>.addRecipe("lead_dust", [<item:gtceu:lead_dust>], <tag:items:forge:ingots/lead>, 200);
<recipetype:create:crushing>.addRecipe("steel_dust", [<item:gtceu:steel_dust>], <tag:items:forge:ingots/steel>, 200);
<recipetype:create:crushing>.addRecipe("copper_dust", [<item:gtceu:copper_dust>], <tag:items:forge:ingots/copper>, 200);
<recipetype:create:crushing>.addRecipe("zinc_dust", [<item:gtceu:zinc_dust>], <tag:items:forge:ingots/zinc>, 200);
<recipetype:create:crushing>.addRecipe("osmium_dust", [<item:gtceu:osmium_dust>], <tag:items:forge:ingots/osmium>, 200);
<recipetype:create:crushing>.addRecipe("coal_dust", [<item:gtceu:coal_dust>], <item:minecraft:coal>, 200);
<recipetype:create:crushing>.addRecipe("charcoal_dust", [<item:gtceu:charcoal_dust>], <item:minecraft:charcoal>, 200);
<recipetype:create:crushing>.addRecipe("red_alloy_dust_crushing", [<item:gtceu:red_alloy_dust>], <item:gtceu:red_alloy_ingot>, 200);
<recipetype:create:crushing>.addRecipe("cupronickel_dust_crushing", [<item:gtceu:cupronickel_dust>], <item:gtceu:cupronickel_ingot>, 200);
<recipetype:create:crushing>.addRecipe("invar_dust_crushing", [<item:gtceu:invar_dust>], <item:gtceu:invar_ingot>, 200);

//Steel
<recipetype:immersiveengineering:blast_furnace>.addRecipe("steel_ingot", <tag:items:forge:dusts/iron>, 1000, <item:gtceu:steel_ingot>, <item:gtceu:dark_ash_tiny_dust> * 2);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("steel_ingot_2", <item:minecraft:iron_ingot>, 1000, <item:gtceu:steel_ingot>, <item:gtceu:dark_ash_tiny_dust> * 2);

//BlastFurnace Fuel
<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("coal", <item:minecraft:coal>, 1200);
<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("lignite_coal", <item:geolosys:lignite_coal>, 1200);
<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("coal_block", <item:minecraft:coal_block>, 12000);