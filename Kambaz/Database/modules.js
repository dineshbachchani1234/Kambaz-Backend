export default [
  {
    "_id": "M101",
    "name": "Introduction to Rocket Propulsion",
    "description": "Basic principles of rocket propulsion and rocket engines.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L101",
        "name": "History of Rocketry",
        "description": "A brief history of rocketry and space exploration.",
        "module": "M101"
      },
      {
        "_id": "L102",
        "name": "Rocket Propulsion Fundamentals",
        "description": "Basic principles of rocket propulsion.",
        "module": "M101"
      },
      {
        "_id": "L103",
        "name": "Rocket Engine Types",
        "description": "Overview of different types of rocket engines.",
        "module": "M101"
      }
    ]
  },
  {
    "_id": "M102",
    "name": "Fuel and Combustion",
    "description": "Understanding rocket fuel, combustion processes, and efficiency.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L201",
        "name": "Rocket Fuel",
        "description": "Overview of different types of rocket fuels.",
        "module": "M102"
      },
      {
        "_id": "L202",
        "name": "Combustion Processes",
        "description": "Understanding combustion processes and efficiency.",
        "module": "M102"
      },
      {
        "_id": "L203",
        "name": "Combustion Instability",
        "description": "Understanding combustion instability and mitigation.",
        "module": "M102"
      }
    ]
  },
  {
    "_id": "M103",
    "name": "Nozzle Design",
    "description": "Principles of rocket nozzle design and performance optimization.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L301",
        "name": "Nozzle Design",
        "description": "Overview of different types of rocket nozzles.",
        "module": "M103"
      },
      {
        "_id": "L302",
        "name": "Nozzle Performance",
        "description": "Understanding nozzle performance and efficiency.",
        "module": "M103"
      },
      {
        "_id": "L303",
        "name": "Nozzle Optimization",
        "description": "Optimizing nozzle design for specific applications.",
        "module": "M103"
      }
    ]
  },
  {
    "_id": "M201",
    "name": "Fundamentals of Aerodynamics",
    "description": "Basic aerodynamic concepts and fluid dynamics principles.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L401",
        "name": "Fluid Statics & Dynamics",
        "description": "From pressure fields to conservation laws (mass, momentum, energy).",
        "module": "M201"
      },
      {
        "_id": "L402",
        "name": "Airfoils and Lift Generation",
        "description": "Bernoulli, circulation, and how lift is produced on airfoils.",
        "module": "M201"
      },
      {
        "_id": "L403",
        "name": "Boundary Layers and Drag",
        "description": "Laminar vs turbulent flow, skin friction, and form drag.",
        "module": "M201"
      }
    ]
  },
  {
    "_id": "M202",
    "name": "Subsonic and Supersonic Flow",
    "description": "Understanding subsonic and supersonic aerodynamic behaviors.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L404",
        "name": "Compressibility and Mach Number",
        "description": "When compressibility matters and how Mach number governs regimes.",
        "module": "M202"
      },
      {
        "_id": "L405",
        "name": "Shock Waves and Expansion Fans",
        "description": "Normal/oblique shocks, Prandtl–Meyer expansions, and flow turning.",
        "module": "M202"
      },
      {
        "_id": "L406",
        "name": "Area–Velocity Relations & Nozzles",
        "description": "De Laval nozzles, choking, and subsonic/supersonic area effects.",
        "module": "M202"
      }
    ]
  },
  {
    "_id": "M203",
    "name": "Aerodynamic Heating",
    "description": "Study of aerodynamic heating and thermal protection systems.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L407",
        "name": "Stagnation Heating and Recovery Factors",
        "description": "Adiabatic wall temperature, recovery factor, and heating estimates.",
        "module": "M203"
      },
      {
        "_id": "L408",
        "name": "Heat Transfer Mechanisms",
        "description": "Conduction, convection, radiation in high-speed flight environments.",
        "module": "M203"
      },
      {
        "_id": "L409",
        "name": "Thermal Protection Systems",
        "description": "Ablatives, tiles, and reusable TPS design trade-offs.",
        "module": "M203"
      }
    ]
  },
  {
    "_id": "M301",
    "name": "Spacecraft Structural Design",
    "description": "Fundamentals of designing spacecraft structures and materials selection.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L501",
        "name": "Loads, Margins, and Factors of Safety",
        "description": "Launch, acoustic, thermal loads and structural sizing philosophy.",
        "module": "M301"
      },
      {
        "_id": "L502",
        "name": "Lightweight Materials and Joints",
        "description": "Composites, aluminum–lithium, fasteners, and bonded joints.",
        "module": "M301"
      },
      {
        "_id": "L503",
        "name": "Vibration and Modal Analysis",
        "description": "Random vibration, sine burst, mode shapes, and test correlation.",
        "module": "M301"
      }
    ]
  },
  {
    "_id": "M302",
    "name": "Orbital Mechanics",
    "description": "Understanding orbital dynamics and mission planning.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L504",
        "name": "Two-Body Problem and Keplerian Orbits",
        "description": "Classical elements, conics, and time-of-flight basics.",
        "module": "M302"
      },
      {
        "_id": "L505",
        "name": "Maneuvers and Δv Budgeting",
        "description": "Hohmann transfers, plane changes, and patched conics overview.",
        "module": "M302"
      },
      {
        "_id": "L506",
        "name": "Orbit Determination & Perturbations",
        "description": "J2 effects, drag, third-body, and basic OD techniques.",
        "module": "M302"
      }
    ]
  },
  {
    "_id": "M303",
    "name": "Spacecraft Systems Engineering",
    "description": "Overview of spacecraft systems and subsystems engineering.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L507",
        "name": "Subsystems Overview",
        "description": "ADCS, power, thermal, comms, propulsion, and avionics roles.",
        "module": "M303"
      },
      {
        "_id": "L508",
        "name": "Requirements, V&V, and Interfaces",
        "description": "From stakeholder needs to specs; interface control and testing.",
        "module": "M303"
      },
      {
        "_id": "L509",
        "name": "Mission Operations and Fault Management",
        "description": "CONOPS, autonomy, FDIR, and on-orbit operations planning.",
        "module": "M303"
      }
    ]
  },
  {
    "_id": "M401",
    "name": "Introduction to Organic Chemistry",
    "description": "Fundamental concepts of organic chemistry and molecular structure.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L601",
        "name": "Structure and Bonding",
        "description": "Atomic orbitals, hybridization, and molecular geometry.",
        "module": "M401"
      },
      {
        "_id": "L602",
        "name": "Nomenclature and Functional Groups",
        "description": "IUPAC naming conventions and functional group identification.",
        "module": "M401"
      },
      {
        "_id": "L603",
        "name": "Stereochemistry Basics",
        "description": "Chirality, enantiomers, and optical activity.",
        "module": "M401"
      }
    ]
  },
  {
    "_id": "M402",
    "name": "Organic Reactions and Mechanisms",
    "description": "Understanding reaction pathways and mechanistic organic chemistry.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L604",
        "name": "Substitution Reactions",
        "description": "SN1, SN2 mechanisms and factors affecting reactivity.",
        "module": "M402"
      },
      {
        "_id": "L605",
        "name": "Elimination Reactions",
        "description": "E1, E2 mechanisms and Zaitsev's rule.",
        "module": "M402"
      },
      {
        "_id": "L606",
        "name": "Addition Reactions",
        "description": "Electrophilic and nucleophilic additions to multiple bonds.",
        "module": "M402"
      }
    ]
  },
  {
    "_id": "M403",
    "name": "Organic Synthesis and Spectroscopy",
    "description": "Multi-step synthesis strategies and structure determination.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L607",
        "name": "Retrosynthetic Analysis",
        "description": "Disconnection approach and synthetic planning.",
        "module": "M403"
      },
      {
        "_id": "L608",
        "name": "NMR Spectroscopy",
        "description": "1H and 13C NMR interpretation and structure elucidation.",
        "module": "M403"
      },
      {
        "_id": "L609",
        "name": "IR and Mass Spectroscopy",
        "description": "Functional group identification and molecular weight determination.",
        "module": "M403"
      }
    ]
  },
  {
    "_id": "M501",
    "name": "Coordination Chemistry",
    "description": "Metal complexes and coordination compounds fundamentals.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L701",
        "name": "Ligands and Coordination Numbers",
        "description": "Types of ligands, denticity, and coordination geometries.",
        "module": "M501"
      },
      {
        "_id": "L702",
        "name": "Crystal Field Theory",
        "description": "d-orbital splitting and electronic configurations.",
        "module": "M501"
      },
      {
        "_id": "L703",
        "name": "Color and Magnetism",
        "description": "Electronic transitions and magnetic properties of complexes.",
        "module": "M501"
      }
    ]
  },
  {
    "_id": "M502",
    "name": "Main Group Chemistry",
    "description": "Chemistry of s and p block elements.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L704",
        "name": "Group 1 and 2 Elements",
        "description": "Alkali and alkaline earth metals chemistry.",
        "module": "M502"
      },
      {
        "_id": "L705",
        "name": "Group 13-15 Elements",
        "description": "Boron, carbon, nitrogen group chemistry.",
        "module": "M502"
      },
      {
        "_id": "L706",
        "name": "Group 16-18 Elements",
        "description": "Chalcogens, halogens, and noble gases.",
        "module": "M502"
      }
    ]
  },
  {
    "_id": "M503",
    "name": "Organometallic Chemistry",
    "description": "Metal-carbon bonds and catalytic applications.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L707",
        "name": "18-Electron Rule",
        "description": "Electron counting and stability of organometallic complexes.",
        "module": "M503"
      },
      {
        "_id": "L708",
        "name": "Homogeneous Catalysis",
        "description": "Wilkinson's catalyst, hydroformylation, and cross-coupling.",
        "module": "M503"
      },
      {
        "_id": "L709",
        "name": "Metal Carbonyls and π-Complexes",
        "description": "CO ligands, metallocenes, and sandwich compounds.",
        "module": "M503"
      }
    ]
  },
  {
    "_id": "M601",
    "name": "Thermodynamics",
    "description": "Laws of thermodynamics and chemical equilibrium.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L801",
        "name": "First and Second Laws",
        "description": "Energy, enthalpy, entropy, and spontaneity.",
        "module": "M601"
      },
      {
        "_id": "L802",
        "name": "Chemical Equilibrium",
        "description": "Equilibrium constants, Le Chatelier's principle, and phase equilibria.",
        "module": "M601"
      },
      {
        "_id": "L803",
        "name": "Statistical Thermodynamics",
        "description": "Partition functions and molecular interpretation of thermodynamics.",
        "module": "M601"
      }
    ]
  },
  {
    "_id": "M602",
    "name": "Chemical Kinetics",
    "description": "Reaction rates and mechanisms.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L804",
        "name": "Rate Laws and Order",
        "description": "Integrated rate laws and determining reaction order.",
        "module": "M602"
      },
      {
        "_id": "L805",
        "name": "Temperature Dependence",
        "description": "Arrhenius equation and activation energy.",
        "module": "M602"
      },
      {
        "_id": "L806",
        "name": "Complex Reactions",
        "description": "Chain reactions, catalysis, and enzyme kinetics.",
        "module": "M602"
      }
    ]
  },
  {
    "_id": "M603",
    "name": "Quantum Chemistry",
    "description": "Quantum mechanical foundations of chemistry.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L807",
        "name": "Wave Functions and Schrödinger Equation",
        "description": "Quantum postulates and simple systems.",
        "module": "M603"
      },
      {
        "_id": "L808",
        "name": "Atomic Structure",
        "description": "Hydrogen atom, orbitals, and multi-electron atoms.",
        "module": "M603"
      },
      {
        "_id": "L809",
        "name": "Molecular Orbital Theory",
        "description": "LCAO, bonding/antibonding orbitals, and MO diagrams.",
        "module": "M603"
      }
    ]
  },
  {
    "_id": "M701",
    "name": "Elvish Languages: Sindarin and Quenya",
    "description": "Study of the two major Elvish language families.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L901",
        "name": "Quenya: The Ancient Tongue",
        "description": "High Elvish grammar, phonology, and writing systems.",
        "module": "M701"
      },
      {
        "_id": "L902",
        "name": "Sindarin: The Grey Elvish",
        "description": "Common Elvish dialect, mutations, and daily usage.",
        "module": "M701"
      },
      {
        "_id": "L903",
        "name": "Tengwar Script System",
        "description": "The Elvish writing system and its variations.",
        "module": "M701"
      }
    ]
  },
  {
    "_id": "M702",
    "name": "Dwarvish and the Black Speech",
    "description": "Study of Khuzdul and the dark language of Mordor.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L904",
        "name": "Khuzdul: The Secret Language",
        "description": "Dwarvish language structure and cultural significance.",
        "module": "M702"
      },
      {
        "_id": "L905",
        "name": "Cirth Runes",
        "description": "The Dwarvish writing system and stone inscriptions.",
        "module": "M702"
      },
      {
        "_id": "L906",
        "name": "The Black Speech of Mordor",
        "description": "Analysis of the Ring inscription and dark linguistics.",
        "module": "M702"
      }
    ]
  },
  {
    "_id": "M703",
    "name": "Linguistic Evolution in Middle-earth",
    "description": "Historical linguistics and language change over the ages.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L907",
        "name": "Proto-Eldarin Roots",
        "description": "Common ancestral language and etymology.",
        "module": "M703"
      },
      {
        "_id": "L908",
        "name": "Language Contact and Change",
        "description": "How languages influenced each other through the ages.",
        "module": "M703"
      },
      {
        "_id": "L909",
        "name": "Names and Place-names",
        "description": "Toponymy and personal names across cultures.",
        "module": "M703"
      }
    ]
  },
  {
    "_id": "M801",
    "name": "The Council of Elrond: A Case Study",
    "description": "Diplomatic principles through the lens of the Council.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L1001",
        "name": "Representation and Voice",
        "description": "How different races were represented and heard.",
        "module": "M801"
      },
      {
        "_id": "L1002",
        "name": "Consensus Building",
        "description": "Achieving agreement among diverse stakeholders.",
        "module": "M801"
      },
      {
        "_id": "L1003",
        "name": "Crisis Management",
        "description": "Decision-making under existential threat.",
        "module": "M801"
      }
    ]
  },
  {
    "_id": "M802",
    "name": "Alliance Formation and Maintenance",
    "description": "Historical alliances between races of Middle-earth.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L1004",
        "name": "The Last Alliance",
        "description": "Elves and Men against Sauron: success factors.",
        "module": "M802"
      },
      {
        "_id": "L1005",
        "name": "The Fellowship Model",
        "description": "Small group dynamics and diverse team leadership.",
        "module": "M802"
      },
      {
        "_id": "L1006",
        "name": "Trade and Cultural Exchange",
        "description": "Economic diplomacy between kingdoms.",
        "module": "M802"
      }
    ]
  },
  {
    "_id": "M803",
    "name": "Conflict Resolution and Peacekeeping",
    "description": "Managing inter-species tensions and preventing wars.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L1007",
        "name": "The Elf-Dwarf Reconciliation",
        "description": "Overcoming historical animosity: Legolas and Gimli.",
        "module": "M803"
      },
      {
        "_id": "L1008",
        "name": "The Role of Neutral Mediators",
        "description": "Wizards as facilitators and peace-brokers.",
        "module": "M803"
      },
      {
        "_id": "L1009",
        "name": "Post-War Reconstruction",
        "description": "Rebuilding trust after the War of the Ring.",
        "module": "M803"
      }
    ]
  }
];