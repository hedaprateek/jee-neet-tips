// Content database for JEE/NEET Tips & Tricks
// Each entry: { id, exam: ['JEE','NEET'], subject, cls: '9-10'|'11-12', type: 'mnemonic'|'shortcut'|'formula', topic, title, body?, rows?, tags? }

const TRICKS = [

/* ============================= PHYSICS ============================= */

{ exam:['JEE','NEET'], subject:'Physics', cls:'9-10', type:'mnemonic', topic:'Light & Optics',
  title:'VIBGYOR — order of colours in a spectrum',
  body:'Violet, Indigo, Blue, Green, Yellow, Orange, Red — the order in which white light splits through a prism (violet bends most, red bends least because violet has the shortest wavelength).' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'9-10', type:'mnemonic', topic:'Electricity',
  title:'Resistor colour codes — "Bad Boys Race Our Young Girls But Villains Generally Get Shot"',
  body:'Black-Brown-Red-Orange-Yellow-Green-Blue-Violet-Grey-White = 0,1,2,3,4,5,6,7,8,9. Each word\'s first letter gives the colour and its position gives the digit.' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'mnemonic', topic:'Electromagnetism',
  title:"Fleming's rules — which hand for which effect",
  body:'"FBI" — <b>F</b>orce, <b>B</b>-field (magnetic), <b>I</b>-current — read thumb→forefinger→middle finger in that order. LEFT hand = motor effect (force on a current-carrying wire, use for finding Force). RIGHT hand = generator effect (induced current, use for finding induced Current/EMF). Trick: "Left = Learn force, Right = Result of motion (EMF)".' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'mnemonic', topic:'Electromagnetism',
  title:"Lenz's Law direction — right-hand rules",
  body:'Curl the right-hand fingers in the direction of conventional current in a loop; the thumb points along the magnetic moment/field direction. For a straight wire, thumb along current, curled fingers give field direction (Right-Hand Grip / Ampere\'s Rule).' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'shortcut', topic:'Mechanics',
  title:'Projectile symmetry shortcut',
  body:'For projectile motion on level ground, the path is symmetric about the peak: time up = time down, speed at a given height is the same on the way up and down, and range is maximised at 45°. Use this to skip solving for time twice — solve once and mirror the answer.' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'shortcut', topic:'Mechanics',
  title:'Centre of mass by symmetry, not integration',
  body:'For any uniform, symmetric lamina or solid (disc, sphere, cube, rod), the centre of mass lies on every axis of symmetry — find the intersection of symmetry axes instead of integrating. For a shape with a cut-out (e.g. disc with a hole), use the "negative mass" trick: treat the missing piece as negative mass at its own centroid and take the weighted average with the full shape.' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'shortcut', topic:'Circuits',
  title:'Symmetric Wheatstone-bridge shortcut',
  body:'If a circuit is a balanced Wheatstone bridge (ratio of arms equal), no current flows through the galvanometer/bridge resistor — remove it entirely and solve the simplified series-parallel network. Instantly cuts a hard network problem down to a two-line one.' },

{ exam:['JEE'], subject:'Physics', cls:'11-12', type:'shortcut', topic:'Units & Dimensions',
  title:'Dimensional analysis to check (or guess) a formula',
  body:'Before trusting a derived formula, check that both sides have the same dimensions in [M L T]. If a formula has an unknown power (e.g. T ∝ l^a g^b), plug in known dimensions of each quantity and solve the simultaneous equations for the powers — this alone gives you formulas like the simple pendulum period without deriving them from scratch.' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'shortcut', topic:'Error Analysis',
  title:'Max % error shortcut for combined quantities',
  body:'For Z = A^p B^q / C^r, the maximum fractional error is ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C) — always ADD the percentage errors, never subtract, even if the formula has division.' },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'Kinematics',
  rows:[
    ['First equation of motion','v = u + at'],
    ['Second equation of motion','s = ut + ½at²'],
    ['Third equation of motion','v² = u² + 2as'],
    ['Distance in nth second','sₙ = u + a(2n − 1)/2'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'Circular & Rotational Motion',
  rows:[
    ['Centripetal acceleration','a = v²/r = ω²r'],
    ['Torque','τ = r × F = Iα'],
    ['Angular momentum','L = Iω = mvr (for a particle)'],
    ['Moment of inertia — disc (about centre)','I = ½MR²'],
    ['Moment of inertia — solid sphere','I = (2/5)MR²'],
    ['Moment of inertia — thin rod (about centre)','I = ML²/12'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'SHM & Waves',
  rows:[
    ['Displacement','x = A sin(ωt + φ)'],
    ['Time period of a spring-mass system','T = 2π√(m/k)'],
    ['Time period of a simple pendulum','T = 2π√(L/g)'],
    ['Wave speed','v = fλ'],
    ['Beat frequency','f_beat = |f₁ − f₂|'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'Electrostatics & Current Electricity',
  rows:[
    ["Coulomb's law",'F = kq₁q₂/r²'],
    ['Electric field due to a point charge','E = kq/r²'],
    ['Capacitance of a parallel plate capacitor','C = ε₀A/d'],
    ["Ohm's law",'V = IR'],
    ['Power','P = VI = I²R = V²/R'],
    ['Resistors in series / parallel','R_s = R₁+R₂+…  ;  1/R_p = 1/R₁+1/R₂+…'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'Optics',
  rows:[
    ['Mirror formula','1/v + 1/u = 1/f'],
    ['Lens formula','1/v − 1/u = 1/f'],
    ['Lens maker\'s formula','1/f = (n−1)(1/R₁ − 1/R₂)'],
    ['Magnification (mirror/lens)','m = −v/u'],
    ["Snell's law",'n₁ sinθ₁ = n₂ sinθ₂'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'11-12', type:'formula', topic:'Modern Physics',
  rows:[
    ['Photoelectric equation','KE_max = hf − φ (work function)'],
    ["Bohr's radius (nth orbit, H atom)",'rₙ = n²(0.529 Å)'],
    ["Bohr's energy (nth orbit, H atom)",'Eₙ = −13.6/n² eV'],
    ['de Broglie wavelength','λ = h/p'],
    ['Mass-energy equivalence','E = mc²'],
  ] },

{ exam:['JEE','NEET'], subject:'Physics', cls:'9-10', type:'formula', topic:'Foundations (Class 9-10)',
  rows:[
    ['Speed','speed = distance/time'],
    ["Newton's second law",'F = ma'],
    ['Work done','W = F × d × cosθ'],
    ['Power','P = W/t'],
    ["Ohm's law",'V = IR'],
    ["Archimedes' principle",'Upthrust = weight of fluid displaced'],
  ] },

/* ============================ CHEMISTRY ============================ */

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Reactivity Series',
  title:'"Please Send Cats, Monkeys And Zebras To Insane Lunatic Hospitals. Cats Hate Practical Astrology, Get Home"',
  body:'K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au — the reactivity series from most to least reactive metal (with Hydrogen as the reference point). Metals above H displace it from dilute acids; metals below don\'t react with dilute acids at all.' },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Redox Reactions',
  title:'OIL RIG — oxidation vs reduction',
  body:'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). The oxidising agent itself gets reduced; the reducing agent itself gets oxidised — a common trap in multiple-choice questions.' },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Organic Nomenclature',
  title:'"Monkeys Eat Peanut Butter, People Hate Having No Dessert" — carbon-chain prefixes',
  body:'Meth(1), Eth(2), Prop(3), But(4), Pent(5), Hex(6), Hept(7), Oct(8), Non(9), Dec(10) — the number of carbon atoms in the parent chain, used in IUPAC naming of every organic compound.' },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Chemical Bonding',
  title:'VSEPR shape mnemonic — count electron domains first',
  body:'2 domains → Linear, 3 → Trigonal planar, 4 → Tetrahedral, 5 → Trigonal bipyramidal, 6 → Octahedral. Remember "lone pairs repel more than bond pairs" (LP-LP > LP-BP > BP-BP) to adjust bond angles down from the ideal value whenever lone pairs are present.' },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Periodic Table',
  title:'Halogens & Noble gases — quick group recall',
  body:'Halogens (Group 17): "F Cl Br I At" → "Frogs Cause Bad Itchy Ache" (F, Cl, Br, I, At — all form 1− ions, all diatomic). Noble gases (Group 18): "He Ne Ar Kr Xe Rn" → "Heavy Newts Are Kept Xenophobically Roaming" — full outer shell, chemically inert.' },

{ exam:['NEET'], subject:'Chemistry', cls:'11-12', type:'mnemonic', topic:'Electrochemical Series',
  title:'Standard reduction potential trend',
  body:'Species higher up (more negative E°) in the electrochemical series are stronger reducing agents; species lower down (more positive E°) are stronger oxidising agents. "Higher up, gives up (electrons)."' },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'shortcut', topic:'Chemical Bonding',
  title:'Hybridisation from steric number — no need to draw the full structure',
  body:'Steric number = (σ-bonds + lone pairs) on the central atom. SN 2 → sp, SN 3 → sp², SN 4 → sp³, SN 5 → sp³d, SN 6 → sp³d². Count bonds and lone pairs from the Lewis structure and read off the hybridisation directly.' },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'shortcut', topic:'Organic Reaction Mechanisms',
  title:'SN1 vs SN2, E1 vs E2 — the four-question filter',
  body:'1) 3° substrate → SN1/E1 likely; 1° substrate → SN2/E2 likely (steric hindrance blocks backside attack in SN2 for 3°). 2) Strong nucleophile/base + polar aprotic solvent → SN2/E2. 3) Weak nucleophile + polar protic solvent → SN1/E1. 4) Bulky base (e.g. tert-butoxide) → favours elimination (E2) over substitution. Run through these four checks in order instead of memorising each case separately.' },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'shortcut', topic:'Equilibrium',
  title:'Henderson–Hasselbalch shortcut for buffer pH',
  body:'pH = pKa + log([salt]/[acid]). When the buffer is made from equal moles of acid and conjugate base, [salt]/[acid] = 1, so log(1) = 0 and pH = pKa exactly — a common shortcut answer in MCQs without any calculator work.' },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'shortcut', topic:'Redox Balancing',
  title:'Ion-electron (half-reaction) method — balancing order',
  body:'Balance in this fixed order to avoid mistakes: (1) atoms other than O and H, (2) O using H₂O, (3) H using H⁺ (or OH⁻ in base — add OH⁻ to both sides at the end to convert), (4) charge using electrons, (5) multiply each half-reaction so electrons cancel, (6) add the two halves together.' },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'shortcut', topic:'Stereochemistry',
  title:'Spot a chiral centre fast',
  body:'A carbon is a stereocentre if it has 4 different groups attached — scan each sp³ carbon and cross it off the moment you find two identical substituents. No need to build the 3D model for every candidate atom.' },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'formula', topic:'Mole Concept',
  rows:[
    ['Moles from mass','n = given mass / molar mass'],
    ['Moles from volume (gas, STP)','n = V(L) / 22.4'],
    ['Molarity','M = moles of solute / volume of solution (L)'],
    ['Molality','m = moles of solute / mass of solvent (kg)'],
  ] },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'formula', topic:'Gas Laws',
  rows:[
    ['Ideal gas equation','PV = nRT'],
    ["Boyle's law (const T)",'P₁V₁ = P₂V₂'],
    ["Charles's law (const P)",'V₁/T₁ = V₂/T₂'],
    ["Graham's law of diffusion",'r₁/r₂ = √(M₂/M₁)'],
  ] },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'11-12', type:'formula', topic:'Thermodynamics & Equilibrium',
  rows:[
    ['First law of thermodynamics','ΔU = q + w'],
    ['Gibbs free energy','ΔG = ΔH − TΔS'],
    ['Equilibrium constant (Gibbs)','ΔG° = −RT ln K'],
    ["Van't Hoff equation",'ln(K₂/K₁) = −ΔH/R (1/T₂ − 1/T₁)'],
  ] },

{ exam:['JEE'], subject:'Chemistry', cls:'11-12', type:'formula', topic:'Electrochemistry',
  rows:[
    ['Nernst equation','E = E° − (RT/nF) ln Q'],
    ["Faraday's first law",'m = ZIt'],
    ['Relation between E° and ΔG°','ΔG° = −nFE°'],
  ] },

{ exam:['JEE','NEET'], subject:'Chemistry', cls:'9-10', type:'formula', topic:'Foundations (Class 9-10)',
  rows:[
    ['Mole concept','1 mole = 6.022 × 10²³ particles (Avogadro number)'],
    ['Molar volume at STP','1 mole of any gas = 22.4 L at STP'],
    ['pH scale','pH = −log[H⁺]  (pH 7 = neutral, <7 acidic, >7 basic)'],
    ['Valency shortcut','Group number (1-2, 13-17) gives valency directly for main-group elements'],
  ] },

/* ================================ MATHS (JEE) ================================ */

{ exam:['JEE'], subject:'Maths', cls:'9-10', type:'mnemonic', topic:'Trigonometry',
  title:'ASTC — "All Students Take Coffee" (sign of trig ratios by quadrant)',
  body:'Quadrant I: All ratios positive. Quadrant II: Sin (and cosec) positive. Quadrant III: Tan (and cot) positive. Quadrant IV: Cos (and sec) positive. Read anticlockwise starting from Quadrant I: All, Sin, Tan, Cos.' },

{ exam:['JEE'], subject:'Maths', cls:'9-10', type:'mnemonic', topic:'Trigonometry',
  title:'SOH-CAH-TOA for basic ratios',
  body:'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. Every other identity (cosec, sec, cot) is just the reciprocal of these three.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'mnemonic', topic:'Calculus',
  title:'LIATE rule for integration by parts',
  body:'When choosing which function is "u" (differentiated first) in ∫u dv, prefer the one that comes first in: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. The other function becomes dv. This ordering minimises the number of steps needed.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Vedic Maths / Arithmetic',
  title:'Squaring any number ending in 5',
  body:'For a number "n5", the square is n×(n+1) followed by 25. Example: 65² → 6×7=42, so 65² = 4225. Works instantly for 15, 25, 35 … 95 without long multiplication.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Vedic Maths / Arithmetic',
  title:'Multiplying any 2-digit number by 11',
  body:'To multiply "ab" by 11: write a, then (a+b), then b — carrying over if (a+b) ≥ 10. Example: 47×11 → 4, (4+7=11 → carry 1), 7 → 4+1=5, 1, 7 → 517.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Quadratic Equations',
  title:'Sum-and-product shortcut for roots',
  body:'For ax² + bx + c = 0, sum of roots = −b/a and product of roots = c/a — use this to construct or verify an equation from its roots, or to sanity-check a factorisation, without solving the full quadratic formula.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Permutations & Combinations',
  title:'"Order matters → permutation; order doesn\'t → combination"',
  body:'Before picking a formula, ask: does rearranging the selected items create a new outcome? If yes (e.g. arranging books on a shelf, forming passwords) → use nPr. If no (e.g. picking a team, choosing toppings) → use nCr. This single question resolves most P&C confusion instantly.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Determinants & Matrices',
  title:'2×2 and 3×3 determinant shortcut (Sarrus\' rule)',
  body:'For a 2×2 matrix [[a,b],[c,d]], det = ad − bc. For 3×3, rewrite the first two columns after the matrix, then sum the three left-to-right diagonal products and subtract the three right-to-left diagonal products — avoids full cofactor expansion for speed in MCQs.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'shortcut', topic:'Complex Numbers',
  title:'Modulus-argument shortcut for powers',
  body:'To compute zⁿ quickly, convert to polar form z = r(cosθ + i sinθ), then use De Moivre: zⁿ = rⁿ(cos nθ + i sin nθ). Far faster than repeated binomial expansion for n ≥ 3.' },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'formula', topic:'Trigonometric Identities',
  rows:[
    ['Pythagorean identity','sin²θ + cos²θ = 1'],
    ['Sum formula','sin(A±B) = sinA cosB ± cosA sinB'],
    ['Double angle','sin2θ = 2sinθcosθ ; cos2θ = 1 − 2sin²θ'],
    ['Sine rule','a/sinA = b/sinB = c/sinC'],
    ['Cosine rule','c² = a² + b² − 2ab·cosC'],
  ] },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'formula', topic:'Differentiation & Integration',
  rows:[
    ['Power rule','d/dx(xⁿ) = nxⁿ⁻¹  ;  ∫xⁿ dx = xⁿ⁺¹/(n+1) + C'],
    ['Product rule','d/dx(uv) = u\'v + uv\''],
    ['Quotient rule','d/dx(u/v) = (u\'v − uv\')/v²'],
    ['Chain rule','dy/dx = dy/du · du/dx'],
    ['∫eˣ dx','eˣ + C'],
    ['∫1/x dx','ln|x| + C'],
  ] },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'formula', topic:'Coordinate Geometry',
  rows:[
    ['Distance formula','d = √[(x₂−x₁)² + (y₂−y₁)²]'],
    ['Section formula (internal)','(mx₂+nx₁)/(m+n) , (my₂+ny₁)/(m+n)'],
    ['Slope of a line','m = (y₂−y₁)/(x₂−x₁)'],
    ['Equation of a circle','(x−h)² + (y−k)² = r²'],
  ] },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'formula', topic:'Vectors & 3D Geometry',
  rows:[
    ['Dot product','a·b = |a||b|cosθ'],
    ['Cross product magnitude','|a×b| = |a||b|sinθ'],
    ['Scalar triple product (volume)','[a b c] = a·(b×c)'],
    ['Direction cosines relation','l² + m² + n² = 1'],
  ] },

{ exam:['JEE'], subject:'Maths', cls:'11-12', type:'formula', topic:'Probability & Binomial Theorem',
  rows:[
    ['Probability of an event','P(E) = favourable outcomes / total outcomes'],
    ['Conditional probability','P(A|B) = P(A∩B)/P(B)'],
    ['Binomial theorem general term','Tᵣ₊₁ = nCᵣ aⁿ⁻ʳ bʳ'],
    ['Mean of binomial distribution','μ = np'],
  ] },

{ exam:['JEE'], subject:'Maths', cls:'9-10', type:'formula', topic:'Foundations (Class 9-10)',
  rows:[
    ['Quadratic formula','x = [−b ± √(b²−4ac)] / 2a'],
    ['(a+b)² expansion','a² + 2ab + b²'],
    ['(a−b)² expansion','a² − 2ab + b²'],
    ['a² − b² identity','(a+b)(a−b)'],
    ['Area of a triangle (Heron\'s)','√[s(s−a)(s−b)(s−c)]'],
  ] },

/* ============================== BIOLOGY (NEET) ============================== */

{ exam:['NEET'], subject:'Biology', cls:'9-10', type:'mnemonic', topic:'Taxonomy',
  title:'"King Philip Came Over For Good Soup" — taxonomic hierarchy',
  body:'Kingdom, Phylum, Class, Order, Family, Genus, Species — from broadest to most specific classification rank. Add "Domain" at the very top with "Dear King Philip…" in modern taxonomy.' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'mnemonic', topic:'Cell Biology / Biochemistry',
  title:'Krebs cycle intermediates — "Can I Keep Selling Sex For Money, Officer?"',
  body:'Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate — the eight intermediates of the citric acid (Krebs) cycle in order.' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'mnemonic', topic:'Genetics',
  title:"Mendel's laws — quick recall pair",
  body:'Law of Segregation: the two alleles of a gene separate during gamete formation (each gamete gets only one). Law of Independent Assortment: alleles of different genes on different chromosomes assort independently of one another — remember "Segregation splits one gene\'s pair, Assortment mixes different genes."' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'mnemonic', topic:'Human Physiology',
  title:'Cranial nerves — "Oh Oh Oh To Touch And Feel Very Green Vegetables AH"',
  body:'Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal — the 12 cranial nerves in order (I to XII).' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'mnemonic', topic:'Plant Physiology',
  title:'Essential plant macronutrients — "C HOPKNS CaFe Mg" (mock chemical formula)',
  body:'C, H, O, P, K, N, S, Ca, Fe, Mg — read as a nonsense "molecule" name, it lists the nine major essential elements plants need in largest quantity for growth.' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'shortcut', topic:'Genetics',
  title:'Punnett square shortcut for dihybrid crosses',
  body:'For a standard dihybrid cross (AaBb × AaBb) you don\'t need a 16-box grid every time: the classic phenotypic ratio is always 9:3:3:1. Recognise the cross type first (mono/di-hybrid, test cross, etc.) and recall its standard ratio directly — only draw the full grid when the genes show linkage or epistasis.' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'shortcut', topic:'Histology',
  title:'Identify tissue type from shape + location, not memorised lists',
  body:'Squamous = flat, thin, lines surfaces built for diffusion (alveoli, blood vessels). Cuboidal = cube-shaped, found where secretion/absorption happens (kidney tubules, glands). Columnar = tall, found where absorption + protection is needed (gut lining). Match the shape to the job the tissue does, and the identification becomes logical instead of rote.' },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'formula', topic:'Genetics',
  rows:[
    ['Monohybrid cross phenotypic ratio','3 : 1'],
    ['Dihybrid cross phenotypic ratio','9 : 3 : 3 : 1'],
    ['Test cross ratio (heterozygous)','1 : 1'],
    ["Hardy-Weinberg equilibrium",'p² + 2pq + q² = 1  (p + q = 1)'],
  ] },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'formula', topic:'Ecology',
  rows:[
    ['Population growth (exponential)','dN/dt = rN'],
    ['Population growth (logistic)','dN/dt = rN(K−N)/K'],
    ['Ecological efficiency (10% law)','~10% of energy transfers to the next trophic level'],
  ] },

{ exam:['NEET'], subject:'Biology', cls:'11-12', type:'formula', topic:'Human Physiology Quick Reference',
  rows:[
    ['Insulin','secreted by pancreatic β-cells; lowers blood glucose'],
    ['Glucagon','secreted by pancreatic α-cells; raises blood glucose'],
    ['Thyroxine (T4)','secreted by thyroid; regulates basal metabolic rate'],
    ['ADH (vasopressin)','secreted by posterior pituitary; promotes water reabsorption in kidneys'],
    ['Normal human body temperature','~37°C (98.6°F)'],
    ['Normal resting heart rate','~72 beats/min'],
  ] },

{ exam:['NEET'], subject:'Biology', cls:'9-10', type:'formula', topic:'Foundations (Class 9-10)',
  rows:[
    ['Cell theory','all living things are made of cells; the cell is the basic unit of life'],
    ['Photosynthesis (summary equation)','6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂'],
    ['Respiration (summary equation)','C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy'],
  ] },

];
