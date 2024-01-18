WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
	"bigreactors:anglesite_ore",
	"bigreactors:benitoite_ore",
	"bigreactors:yellorite_ore",
	
	"electrodynamics:deepslateorealuminum",	
	"electrodynamics:deepslateorechromite",
	"electrodynamics:deepslateorefluorite",
	"electrodynamics:deepslateorehalite",
	"electrodynamics:deepslateorelead",
	"electrodynamics:deepslateorelepidolite",	
	"electrodynamics:deepslateoremolybdenum",
	"electrodynamics:deepslateoremonazite",
	"electrodynamics:deepslateoreniter",
	"electrodynamics:deepslateorerutile",
	"electrodynamics:deepslateoresilver",
	"electrodynamics:deepslateoresulfur",
	"electrodynamics:deepslateoresylvite",
	"electrodynamics:deepslateorethorianite",
	"electrodynamics:deepslateoretin",
	"electrodynamics:deepslateoreuraninite",
	"electrodynamics:deepslateorevanadinite",
	
	"electrodynamics:orealuminum",
	"electrodynamics:orechromite",
	"electrodynamics:orefluorite",
	"electrodynamics:orehalite",
	"electrodynamics:orelead",
	"electrodynamics:orelepidolite",	
	"electrodynamics:oremolybdenum",
	"electrodynamics:oremonazite",
	"electrodynamics:oreniter",
	"electrodynamics:orerutile",
	"electrodynamics:oresilver",
	"electrodynamics:oresulfur",
	"electrodynamics:oresylvite",
	"electrodynamics:orethorianite",
	"electrodynamics:oretin",
	"electrodynamics:oreuraninite",
	"electrodynamics:orevanadinite",
  ])
})

GTCEuStartupEvents.registry('gtceu:element', event => {
   event.create('desh', 27, 177, -1, null, 'Dsh', false);
   event.create('ostrum', 27, 177, -1, null, 'Ost', false);
   event.create('calorite', 27, 177, -1, null, 'Cal', false);
   event.create('boron_carbide', 27, 177, -1, null, 'B4C', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
   event.create("desh")
        .ingot(1)
        .element(GTElements.get("desh"))
        .color(0xd17320).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.HV], 4, 6, false)
		
	event.create("ostrum")
        .ingot(1)
        .element(GTElements.get("ostrum"))
        .color(0xa86c73).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.EV], 1, 2, false)
		
	event.create("calorite")
        .ingot(1)
        .element(GTElements.get("calorite"))
        .color(0xcb4e4f).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.IV], 2, 2, false)

	event.create("boron_carbide")
        .ingot(1)
        .element(GTElements.get("boron_carbide"))
		.components('4x boron', '1x carbon')
        .color(0x252625).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.LV], 2, 2, false)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cryo_freezer')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)


	event.create('basic_drilling_rig')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.DRILL_TOOL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('cryo_freezer', 'multiblock')
		   .rotationState(RotationState.NON_Y_AXIS)
		   .recipeType('cryo_freezer')
		   .pattern(definition => FactoryBlockPattern.start()
			   .aisle("CCC", "CCC", "CCC", "CCC")
			   .aisle("CCC", "CIC", "CAC", "CCC")
			   .aisle("CCC", "CMC", "CCC", "CCC")
			   .where('M', Predicates.controller(Predicates.blocks(definition.get())))
			   .where('A', Predicates.air())
			   .where('I', Predicates.blocks('minecraft:blue_ice'))
			   .where('C', Predicates.blocks('gtceu_tstp:ostrum_machine_casing')
				   .or(Predicates.autoAbilities(definition.getRecipeTypes()))
				   .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				   .or(Predicates.abilities(PartAbility.INPUT_ENERGY)))
			   .build())
		   .workableCasingRenderer("gtceu_tstp:block/ostrum_machine_casing",
			   "gtceu:block/multiblock/electric_blast_furnace", false)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('basic_drilling_rig', 'multiblock')
		   .rotationState(RotationState.NON_Y_AXIS)
		   .recipeType('basic_drilling_rig')
		   .pattern(definition => FactoryBlockPattern.start()
			   .aisle("AAAAA", "AAFAA", "AFFFA", "ACCCA")
			   .aisle("AAFAA", "AFAFA", "AFAFA", "ACCCA")
			   .aisle("AAAAA", "AAFAA", "AFFFA", "ACCCA")
			   .aisle("CCACC", "CAAAC", "CAAAC", "CCMCC")
			   .where('M', Predicates.controller(Predicates.blocks(definition.get())))
			   .where('A', Predicates.air())
			   .where('F', Predicates.blocks('gtceu:steel_frame'))
			   .where('C', Predicates.blocks('gtceu:solid_machine_casing')
				   .or(Predicates.autoAbilities(definition.getRecipeTypes()))
				   .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				   .or(Predicates.abilities(PartAbility.INPUT_ENERGY)))
			   .build())
		   .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
			   "gtceu:block/multiblock/electric_blast_furnace", false)
})