import type {
  ArmorCardData,
  CardData,
  ConsumableCardData,
  OffHandCardData,
  WeaponCardData,
} from "@/data/repository/CardData";
import * as _ from "lodash-es";
import type { DataRepository } from "@/data/repository/DataRepository";
import type { ItemType } from "@/data/type/ItemType";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";
import {
  instanceOfArmorCardData,
  instanceOfConsumableCardData,
  instanceOfOffHandCardData,
  instanceOfWeaponCardData,
} from "@/data/repository/CardData";

export class CardDataRepository implements DataRepository {
  private cards = [
    {
      id: "amiran-crossbow",
      name: "Amiran Crossbow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "amiran-halberd",
      name: "Amiran Halberd",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponCardData,
    {
      id: "amiran-royal-maul",
      name: "Amiran Royal Maul",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "amulet-of-power",
      name: "Amulet Of Power",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Trinket",
    } as CardData,
    {
      id: "amulet-of-rewinding",
      name: "Amulet Of Rewinding",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Trinket",
    } as CardData,
    {
      id: "amulet-of-the-copycat",
      name: "Amulet Of The Copycat",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Trinket",
    } as CardData,
    {
      id: "badge-of-the-wardens",
      name: "Badge Of The Wardens",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "battle-maul",
      name: "Battle Maul",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "blacksteel-blade",
      name: "Blacksteel Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "blacksteel-greatsword",
      name: "Blacksteel Greatsword",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "blacksteel-longsword",
      name: "Blacksteel Longsword",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "blooded-sword",
      name: "Blooded Sword",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "bloody-axe-cosmic-gem",
      name: "Bloody Axe (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "bloody-axe-socketed",
      name: "Bloody Axe (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "blue-flame-torch",
      name: "Blue Flame Torch",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "boots-of-agility",
      name: "Boots Of Agility",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Trinket",
    } as CardData,
    {
      id: "boots-of-levitation",
      name: "Boots Of Levitation",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Trinket",
    } as CardData,
    {
      id: "boots-of-striding",
      name: "Boots Of Striding",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Trinket",
    } as CardData,
    {
      id: "bracers-of-endurance",
      name: "Bracers Of Endurance",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "breastplate",
      name: "Breastplate",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "broken-phylactery",
      name: "Broken Phylactery",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "cloth-armor",
      name: "Cloth Armor",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "corruptor-knife",
      name: "Corruptor Knife",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "cosmic-gemstone",
      name: "Cosmic Gemstone",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Gem",
    } as ConsumableCardData,
    {
      id: "cosmic-gemstone-chest",
      name: "Cosmic Gemstone (Chest)",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Gem",
    } as ConsumableCardData,
    {
      id: "cosmic-gemstone-from-sigil-of-honor",
      name: "Cosmic Gemstone (From Sigil Of Honor)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Gem",
    } as ConsumableCardData,
    {
      id: "crossbow",
      name: "Crossbow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "cursed-bracelet",
      name: "Cursed Bracelet",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "deadly-backstabber",
      name: "Deadly Backstabber",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "deft-stilleto",
      name: "Deft Stilleto",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "dewey-and-guss-collar",
      name: "Dewey & Guss' Collar",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "displacement-cloak",
      name: "Displacement Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "dream-weaveplate",
      name: "Dream Weaveplate",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Cloth", "Plate"],
    } as ArmorCardData,
    {
      id: "dreamcrafted-buckler",
      name: "Dreamcrafted Buckler",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandCardData,
    {
      id: "dreamcrafted-pattern-bracers-of-endurance",
      name: "Dreamcrafted Pattern (Bracers Of Endurance)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreamcrafted-pattern-dream-weaveplate",
      name: "Dreamcrafted Pattern (Dream Weaveplate)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreamcrafted-pattern-dreamcrafted-buckler",
      name: "Dreamcrafted Pattern (Dreamcrafted Buckler)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreamcrafted-pattern-dreampiercer-bow",
      name: "Dreamcrafted Pattern (Dreampiercer Bow)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreamcrafted-pattern-exquisite-dreamblade",
      name: "Dreamcrafted Pattern (Exquisite Dreamblade)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreamcrafted-pattern-sigil-of-narangerel",
      name: "Dreamcrafted Pattern (Sigil Of Narang'erel)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Pattern",
    } as ConsumableCardData,
    {
      id: "dreampiercer-bow",
      name: "Dreampiercer Bow",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Implement", "Ranged"],
    } as WeaponCardData,
    {
      id: "dueling-dagger",
      name: "Dueling Dagger",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "dwarven-kings-sword-cosmic-gem",
      name: "Dwarven King's Sword (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "dwarven-kings-sword-socketed",
      name: "Dwarven King's Sword (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "elvish-bow",
      name: "Elvish Bow",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "empowered-pact-blade",
      name: "Empowered Pact Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "enchanted-crossbow-cosmic-gem",
      name: "Enchanted Crossbow (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponCardData,
    {
      id: "enchanted-crossbow-socketed",
      name: "Enchanted Crossbow (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponCardData,
    {
      id: "exquisite-dreamblade",
      name: "Exquisite Dreamblade",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponCardData,
    {
      id: "family-locket-cosmic-gem",
      name: "Family Locket (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "family-locket-socketed",
      name: "Family Locket (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "full-plate-armor",
      name: "Full Plate Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "gold-medal",
      name: "Gold Medal",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "golden-locket",
      name: "Golden Locket",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "good-quality-stick",
      name: "Good-Quality Stick",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "good-quality-torch",
      name: "Good-Quality Torch",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "greater-displacement-cloak",
      name: "Greater Displacement Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "greater-mystical-symbol",
      name: "Greater Mystical Symbol",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "greater-spellweave-cloak",
      name: "Greater Spellweave Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "greater-symbol-of-light",
      name: "Greater Symbol Of Light",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "half-plate-armor",
      name: "Half-Plate Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "heavy-shield",
      name: "Heavy Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "heavy-thornmail",
      name: "Heavy Thornmail",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "hellscarian-short-bow",
      name: "Hellscarian Short Bow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "iron-shield",
      name: "Iron Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "jagged-blade-axe",
      name: "Jagged Blade Axe",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "kite-shield-cosmic-gem",
      name: "Kite Shield (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "kite-shield-socketed",
      name: "Kite Shield (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "leather-armor",
      name: "Leather Armor",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "lesser-displacement-cloak",
      name: "Lesser Displacement Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "lesser-mystical-symbol",
      name: "Lesser Mystical Symbol",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "lesser-spellweave-cloak",
      name: "Lesser Spellweave Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "lesser-symbol-of-light",
      name: "Lesser Symbol Of Light",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "light-maul",
      name: "Light Maul",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "light-thornmail",
      name: "Light Thornmail",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "lovers-promise",
      name: "Lover's Promise",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "marksman-bow",
      name: "Marksman Bow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "mystical-symbol",
      name: "Mystical Symbol",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "orcish-blade",
      name: "Orcish Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "orcish-cleaver",
      name: "Orcish Cleaver",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "orcish-reaper-blade",
      name: "Orcish Reaper Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
    } as WeaponCardData,
    {
      id: "pact-blade",
      name: "Pact Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "padded-leather-armor",
      name: "Padded Leather Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "periapt-of-greater-healing",
      name: "Periapt Of Greater Healing",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Trinket",
    } as CardData,
    {
      id: "periapt-of-healing",
      name: "Periapt Of Healing",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Trinket",
    } as CardData,
    {
      id: "periapt-of-supreme-healing",
      name: "Periapt Of Supreme Healing",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Trinket",
    } as CardData,
    {
      id: "plate-armor",
      name: "Plate Armor",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "potion-of-fortitude",
      name: "Potion Of Fortitude",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Potion",
    } as ConsumableCardData,
    {
      id: "potion-of-healing",
      name: "Potion Of Healing",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Potion",
    } as ConsumableCardData,
    {
      id: "potion-of-preparation",
      name: "Potion Of Preparation",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Potion",
    } as ConsumableCardData,
    {
      id: "reinforced-leather-armor",
      name: "Reinforced Leather Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "reinforced-shadow-leather",
      name: "Reinforced Shadow Leather",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "repeating-crossbow",
      name: "Repeating Crossbow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "ring-of-greater-precision",
      name: "Ring Of Greater Precision",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Trinket",
    } as CardData,
    {
      id: "ring-of-legendary-precision",
      name: "Ring Of Legendary Precision",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Trinket",
    } as CardData,
    {
      id: "ring-of-precision",
      name: "Ring Of Precision",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Trinket",
    } as CardData,
    {
      id: "round-brass-shield",
      name: "Round Brass Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "round-golden-shield",
      name: "Round Golden Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "round-silver-shield",
      name: "Round Silver Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "ruby-brooch",
      name: "Ruby Brooch",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "runecarved-blade",
      name: "Runecarved Blade",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Implement"],
    } as WeaponCardData,
    {
      id: "runecarved-cloak",
      name: "Runecarved Cloak",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Leather", "Cloth"],
    } as ArmorCardData,
    {
      id: "runecarved-shield",
      name: "Runecarved Shield",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Shield", "Relic"],
    } as OffHandCardData,
    {
      id: "scroll-of-displacement",
      name: "Scroll Of Displacement",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Scroll",
    } as ConsumableCardData,
    {
      id: "scroll-of-icy-bolts",
      name: "Scroll Of Icy Bolts",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Scroll",
    } as ConsumableCardData,
    {
      id: "scroll-of-incinerate",
      name: "Scroll Of Incinerate",
      content: "core",
      cardType: "Chest",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Scroll",
    } as ConsumableCardData,
    {
      id: "scroll-of-unmaking",
      name: "Scroll Of Unmaking",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Consumable",
      consumableType: "Scroll",
    } as ConsumableCardData,
    {
      id: "seed-of-darkness-bright",
      name: "Seed Of Darkness (Bright)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "seed-of-darkness-dim",
      name: "Seed Of Darkness (Dim)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "shadow-leather-armor",
      name: "Shadow Leather Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "sigil-of-honor",
      name: "Sigil Of Honor",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "sigil-of-narangerel",
      name: "Sigil Of Narang'erel",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "spellweave-cloak",
      name: "Spellweave Cloak",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Cloth"],
    } as ArmorCardData,
    {
      id: "staff-of-the-arcana",
      name: "Staff Of The Arcana",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-dawn",
      name: "Staff Of The Dawn",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-moon",
      name: "Staff Of The Moon",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-noon",
      name: "Staff Of The Noon",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-stars",
      name: "Staff Of The Stars",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-twilight",
      name: "Staff Of The Twilight",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-wildfire-cosmic-gem",
      name: "Staff Of The Wildfire (Cosmic Gem)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "staff-of-the-wildfire-socketed",
      name: "Staff Of The Wildfire (Socketed)",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "steel-shield",
      name: "Steel Shield",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Shield"],
    } as OffHandCardData,
    {
      id: "studded-leather-armor",
      name: "Studded Leather Armor",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "studded-shadow-leather",
      name: "Studded Shadow Leather",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Leather"],
    } as ArmorCardData,
    {
      id: "sword-of-the-dynasty",
      name: "Sword Of The Dynasty",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "sword-of-the-prince",
      name: "Sword Of The Prince",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponCardData,
    {
      id: "symbol-of-light",
      name: "Symbol Of Light",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Relic"],
    } as OffHandCardData,
    {
      id: "teddy-bear",
      name: "Teddy Bear",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Trinket",
    } as CardData,
    {
      id: "terror-blade",
      name: "Terror Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "thornmail",
      name: "Thornmail",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Armor",
      armorTypes: ["Plate"],
    } as ArmorCardData,
    {
      id: "throwing-dagger",
      name: "Throwing Dagger",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "undermountain-scabbard",
      name: "Undermountain Scabbard",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandCardData,
    {
      id: "valaranian-runebow",
      name: "Valaranian Runebow",
      content: "core",
      cardType: "Camp Item",
      cardRank: 3,
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
    } as WeaponCardData,
    {
      id: "vengeful-pact-blade",
      name: "Vengeful Pact Blade",
      content: "core",
      cardType: "Camp Item",
      cardRank: 2,
      itemType: "Off Hand",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandCardData,
    {
      id: "vicious-knife",
      name: "Vicious Knife",
      content: "core",
      cardType: "Camp Item",
      cardRank: 1,
      itemType: "Weapon",
      weaponTypes: ["Light"],
    } as WeaponCardData,
    {
      id: "wooden-staff",
      name: "Wooden Staff",
      content: "core",
      cardType: "Starting Gear",
      cardRank: null,
      itemType: "Weapon",
      weaponTypes: ["Implement"],
    } as WeaponCardData,
    {
      id: "xerethian-breastplate",
      name: "Xerethian Breastplate",
      content: "core",
      cardType: "Adventure",
      cardRank: null,
      itemType: "Armor",
      armorTypes: ["Leather", "Plate"],
    } as ArmorCardData,
  ];

  find(cardId: string): CardData | undefined {
    return _.find(this.cards, { id: cardId });
  }

  findAll(): CardData[] {
    return this.cards;
  }

  findByType(type: ItemType, subType: ArmorType | ConsumableType | OffHandType | WeaponType | null = null): CardData[] {
    const cards: CardData[] = [];

    const isSubType = function (
      item: CardData,
      st: ArmorType | ConsumableType | OffHandType | WeaponType | null
    ): boolean {
      if (st === null) {
        return true;
      }

      if (instanceOfArmorCardData(item)) {
        return (item as ArmorCardData).armorTypes.some((value) => value === st);
      }
      if (instanceOfConsumableCardData(item)) {
        return (item as ConsumableCardData).consumableType === st;
      }
      if (instanceOfOffHandCardData(item)) {
        return (item as OffHandCardData).offHandTypes.some((value) => value === st);
      }
      if (instanceOfWeaponCardData(item)) {
        return (item as WeaponCardData).weaponTypes.some((value) => value === st);
      }
      return false;
    };

    this.cards.forEach((card) => {
      const c = card as CardData;
      if (c.itemType === type && (subType == null || isSubType(c, subType))) {
        cards.push(c);
      }
    });

    return cards;
  }
}