data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "You may replace one of your melee attacks with a <i>Throw</i>, <i>Grapple</i> or <i>NonLethal</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Throw",
        icon: "thrown-spear",
        subtitle: "Special melee attack",
        description: "Throw an equipped weapon or close item.",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a throwing. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "Throw a equipped weapon with the thrown property to make a ranged attack, weapons that doesn't have the property deals 1d4 damage.",
            "You can pick a near item to throw it, making an improvised weapon ranged attack, dealing 1d4 damage."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0).",
        ]
    },
    {
        title: "Non-Lethal",
        icon: "sleepy",
        subtitle: "Special melee attack",
        description: "Subject a creature into unconciousness instead of killing it",
        reference: "PHB, pg. 196.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a non-lethal attack. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "Dropping the target to 0 health points with a non-lethal attack, you subject it to the unconscious condition."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Run",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "suspicious",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "breaking-chain",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Equip Item",
        icon: "sword-spade",
        subtitle: "Equip or unequip an item",
        description: "Equip or unequip an item",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "An item always takes an action to equip.",
            "Armor takes several minutes to equip or unequip.",
            "Equip a nearby item to have an improvised weapon, such as broken glass, a table leg, a frying pan, a wagon wheel, or a dead goblin.",
            "Often, an improvised weapon is similar to an actual weapon and can be treated as such.",
            "An object that bears no resemblance to a weapon deals 1d4 damage."
        ]
    },
    {
        title: "Hide",
        icon: "ninja-mask",
        subtitle: "Hide from a creature",
        description: "Attempt to hide from a creature",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature stays unconcious for 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
