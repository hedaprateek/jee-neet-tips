// Content database for JEE/NEET Tips & Tricks
// Entry shape:
//   { exam:['JEE','NEET'], subject, cls:'9-10'|'11-12', type:'mnemonic'|'shortcut'|'formula',
//     topic, title, body?, rows? }
// mnemonic/shortcut entries use `body` (HTML string). formula entries use `rows` ([label, formula] pairs).

const TRICKS = [

/* ==================================================================
   PHYSICS — MNEMONICS
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Physics", cls:"9-10", type:"mnemonic", topic:"Optics",
  title:"VIBGYOR — order of colours in a spectrum",
  body:"Violet, Indigo, Blue, Green, Yellow, Orange, Red — the order white light splits into through a prism. Violet bends the most because it has the shortest wavelength; red bends the least." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"9-10", type:"mnemonic", topic:"Current Electricity",
  title:"Resistor colour codes — “Bad Boys Race Our Young Girls But Violet Generally Wins”",
  body:"Black-Brown-Red-Orange-Yellow-Green-Blue-Violet-Grey-White = 0,1,2,3,4,5,6,7,8,9. Each word's first letter gives the colour; its position gives the digit." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Magnetism & EMI",
  title:"Fleming's rules — “FBI” and which hand to use",
  body:"Point <b>F</b>orce (thumb), <b>B</b>-field (forefinger), <b>I</b>-current (middle finger) — mutually perpendicular, in that order. <b>Left</b> hand = motor effect (force on a current-carrying conductor). <b>Right</b> hand = generator effect (induced current). Remember: “Motor Left, Generator Right.”" },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Magnetism & EMI",
  title:"Right-hand grip rule (Ampere's rule)",
  body:"Grip the wire with your right hand, thumb pointing along the conventional current — your curled fingers give the direction of the magnetic field circling the wire. For a coil, curl fingers along the current and the thumb points to the North pole." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Magnetism & EMI",
  title:"Lenz's law — “nature opposes change”",
  body:"The induced EMF always opposes the change that produced it. Practical test: if flux is <i>increasing</i>, the induced current flows so as to <i>reduce</i> it (and vice versa). The minus sign in ε = −dΦ/dt <i>is</i> the mnemonic." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Units & Measurement",
  title:"SI prefix ladder — “Tera Giga Mega Kilo | milli micro nano pico”",
  body:"Going up: kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Going down: milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹), pico (10⁻¹²). Each step is three powers of ten — “three at a time, both ways.”" },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Modern Physics",
  title:"EM spectrum order — “Roman Men Invented Very Unusual X-ray Guns”",
  body:"Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma — in order of <i>increasing</i> frequency and energy (decreasing wavelength). Radio is the gentlest, gamma the most penetrating." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Optics",
  title:"Sign convention — “Real is positive on the right”",
  body:"Distances measured in the direction of incident light are positive; against it, negative. Practical result: for mirrors, a real image gives +v; for lenses, object distance u is always negative (object on the left). Heights above the axis are positive, below are negative." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Semiconductors",
  title:"Doping — “Pentavalent gives N, Trivalent gives P”",
  body:"<b>Pent</b>avalent dopant (P, As, Sb) donates a spare electron → <b>N</b>-type (<b>N</b>egative charge carriers). <b>Tri</b>valent dopant (B, Al, Ga) creates a hole → <b>P</b>-type (<b>P</b>ositive carriers). Count valence electrons and the type follows." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Current Electricity",
  title:"Kirchhoff's two laws — Junction vs Loop",
  body:"<b>KCL</b> (Current law) applies at a <b>junction</b>: ΣI_in = ΣI_out — it's conservation of <i>charge</i>. <b>KVL</b> (Voltage law) applies around a closed <b>loop</b>: ΣV = 0 — it's conservation of <i>energy</i>. “Current at corners, Voltage in loops.”" },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"SHM & Waves",
  title:"Doppler effect — “Approach raises, Recede lowers”",
  body:"When source and observer move closer, the observed frequency is <i>higher</i> than the emitted one; moving apart, it's <i>lower</i>. Sign trick: put the sign in the formula so the answer moves in the direction physical intuition demands, then verify — this catches sign errors instantly." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Thermodynamics",
  title:"“Iso-” process names — read the prefix, know the constant",
  body:"Iso<b>thermal</b> = constant Temperature (ΔT = 0). Iso<b>baric</b> = constant Pressure (baros = weight/pressure). Iso<b>choric</b> = constant Volume (choros = space). <b>Adiabatic</b> = no heat exchange (Q = 0, “a-dia-batic” = not-through-passing)." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"9-10", type:"mnemonic", topic:"Laws of Motion",
  title:"Newton's three laws — Inertia, Force, Reaction",
  body:"1st = <b>I</b>nertia (no net force → no change in motion). 2nd = <b>F</b>orce quantified (F = ma). 3rd = <b>R</b>eaction (equal and opposite pairs on <i>different</i> bodies). Remember “I-F-R” and note the 3rd law pair never acts on the same object — a classic MCQ trap." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"9-10", type:"mnemonic", topic:"Current Electricity",
  title:"Series vs parallel behaviour",
  body:"<b>Series</b>: same <b>current</b> through all, voltages add, resistance adds up (R increases). <b>Parallel</b>: same <b>voltage</b> across all, currents add, resistance drops below the smallest one. “Series shares current, Parallel shares voltage.”" },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Magnetism & EMI",
  title:"Transformers — “Step up voltage, step down current”",
  body:"For an ideal transformer V_s/V_p = N_s/N_p and power is conserved, so whatever happens to voltage, the opposite happens to current. More turns on the secondary → step-<i>up</i> voltage but proportionally <i>lower</i> current." },

/* ==================================================================
   PHYSICS — SHORTCUTS
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Kinematics",
  title:"Projectile symmetry shortcut",
  body:"On level ground the trajectory is symmetric about the peak: time up = time down, and the speed at any height is the same going up and coming down. Range is maximum at 45°, and complementary angles (e.g. 30° and 60°) give the <i>same</i> range. Solve one half and mirror it." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Kinematics",
  title:"Read graphs instead of solving equations",
  body:"On a displacement-time graph, <b>slope = velocity</b>. On a velocity-time graph, <b>slope = acceleration</b> and <b>area = displacement</b>. Many kinematics MCQs are one glance at a graph rather than three equations." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Rotational Motion",
  title:"Centre of mass by symmetry, plus the negative-mass trick",
  body:"For any uniform symmetric body the COM sits at the intersection of its symmetry axes — no integration needed. For a shape with a hole cut out, treat the missing piece as <i>negative</i> mass at its own centroid and take the weighted average with the complete shape." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Current Electricity",
  title:"Balanced Wheatstone bridge — delete the middle branch",
  body:"If P/Q = R/S, the bridge is balanced and <b>no current flows through the galvanometer</b>. Remove that branch entirely and what's left is a simple series-parallel network. Turns a nightmare circuit into two lines of work." },

{ exam:["JEE"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Current Electricity",
  title:"Infinite ladder networks — use self-similarity",
  body:"For an infinite repeating resistor ladder of equivalent resistance R, cutting off one section leaves an identical infinite network. So write R in terms of itself (e.g. R = r + (r·R)/(r+R)) and solve the resulting quadratic — no summing of infinite series." },

{ exam:["JEE"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Units & Measurement",
  title:"Dimensional analysis to derive or verify a formula",
  body:"Write both sides in [M L T] and check they match — a fast error filter. If a relation has unknown powers (T ∝ lᵃgᵇ), equate dimensions and solve for the powers; this alone produces results like T = 2π√(l/g) without any derivation." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Units & Measurement",
  title:"Maximum % error — always add",
  body:"For Z = A^p · B^q / C^r, the maximum fractional error is ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C). Errors <b>add</b> regardless of whether the quantity sits in the numerator or the denominator — never subtract them." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Kinematics",
  title:"Relative velocity for river, boat and rain problems",
  body:"Shift to the frame of one object: v_AB = v_A − v_B (vector). For “shortest path across a river,” the boat's resultant must point straight across, so the upstream component must cancel the current. For “rain appears to come from…”, use v_rain,man = v_rain − v_man." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"SHM & Waves",
  title:"Spot SHM instantly from the acceleration",
  body:"If you can write the net restoring acceleration as a = −ω²x, the motion <i>is</i> SHM and ω is read straight off the coefficient — giving T = 2π/ω immediately. This works for pendulums, floating blocks, liquid columns and LC circuits alike." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Electrostatics",
  title:"Capacitors combine the mirror-image of resistors",
  body:"Capacitors in <b>parallel</b> add directly (C = C₁+C₂), in <b>series</b> add as reciprocals (1/C = 1/C₁+1/C₂) — exactly opposite to resistors. Memorise one set and flip it rather than learning both." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Work, Energy & Power",
  title:"Use work-energy theorem instead of kinematics",
  body:"When force varies or the path is awkward, skip the equations of motion: W_net = ΔKE. For conservative systems use energy conservation (KE + PE = constant) — it removes time from the problem entirely and usually saves a full page of algebra." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Laws of Motion",
  title:"Pseudo force for lift and accelerating-frame problems",
  body:"In a frame accelerating with acceleration a, add a pseudo force −ma on every mass and then treat the frame as if at rest. Lift going up with acceleration a → apparent weight m(g+a); going down → m(g−a); free fall → zero." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Optics",
  title:"Lens combinations — add powers, not focal lengths",
  body:"For thin lenses in contact, P = P₁ + P₂ + … where P = 1/f (in metres, giving dioptres). Adding powers is arithmetic; adding focal lengths through 1/f = 1/f₁ + 1/f₂ invites mistakes. Convert to power, add, convert back." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Modern Physics",
  title:"Photoelectric graphs — the slope is the answer",
  body:"For a stopping-potential (V₀) vs frequency (ν) graph, the slope is h/e and the y-intercept is −φ/e. So the slope is the <i>same</i> for every metal, and only the intercept shifts — an instant discriminator in graph-based MCQs." },

/* ==================================================================
   PHYSICS — FORMULA TABLES
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Kinematics",
  title:"Equations of motion",
  rows:[
    ["First equation","v = u + at"],
    ["Second equation","s = ut + ½at²"],
    ["Third equation","v² = u² + 2as"],
    ["Distance in nth second","sₙ = u + a(2n − 1)/2"],
    ["Projectile — time of flight","T = 2u sinθ / g"],
    ["Projectile — max height","H = u²sin²θ / 2g"],
    ["Projectile — range","R = u²sin2θ / g"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Rotational Motion",
  title:"Rotation and moments of inertia",
  rows:[
    ["Centripetal acceleration","a = v²/r = ω²r"],
    ["Torque","τ = r × F = Iα"],
    ["Angular momentum","L = Iω"],
    ["Rotational KE","KE = ½Iω²"],
    ["Disc / cylinder (about centre)","I = ½MR²"],
    ["Solid sphere","I = (2/5)MR²"],
    ["Hollow sphere","I = (2/3)MR²"],
    ["Thin rod (about centre)","I = ML²/12"],
    ["Parallel axis theorem","I = I_cm + Md²"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"SHM & Waves",
  title:"SHM and wave motion",
  rows:[
    ["Displacement","x = A sin(ωt + φ)"],
    ["Spring-mass period","T = 2π√(m/k)"],
    ["Simple pendulum period","T = 2π√(L/g)"],
    ["Total energy in SHM","E = ½mω²A²"],
    ["Wave speed","v = fλ"],
    ["Speed on a string","v = √(T/μ)"],
    ["Beat frequency","f = |f₁ − f₂|"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Electrostatics",
  title:"Electrostatics and capacitance",
  rows:[
    ["Coulomb's law","F = kq₁q₂/r², k = 9×10⁹ N·m²/C²"],
    ["Field of a point charge","E = kq/r²"],
    ["Potential of a point charge","V = kq/r"],
    ["Parallel plate capacitance","C = ε₀A/d"],
    ["Energy stored in a capacitor","U = ½CV² = Q²/2C"],
    ["Capacitors in series / parallel","1/C_s = Σ1/Cᵢ ; C_p = ΣCᵢ"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Current Electricity",
  title:"Current electricity",
  rows:[
    ["Ohm's law","V = IR"],
    ["Power","P = VI = I²R = V²/R"],
    ["Resistivity relation","R = ρL/A"],
    ["Resistors in series / parallel","R_s = ΣRᵢ ; 1/R_p = Σ1/Rᵢ"],
    ["EMF with internal resistance","V = ε − Ir"],
    ["Wheatstone balance condition","P/Q = R/S"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Magnetism & EMI",
  title:"Magnetism and induction",
  rows:[
    ["Force on a moving charge","F = qvB sinθ"],
    ["Force on a current-carrying wire","F = BIL sinθ"],
    ["Field due to a long straight wire","B = μ₀I / 2πr"],
    ["Field at the centre of a loop","B = μ₀I / 2R"],
    ["Faraday's law","ε = −dΦ/dt"],
    ["Motional EMF","ε = BLv"],
    ["Transformer relation","V_s/V_p = N_s/N_p"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Optics",
  title:"Ray and wave optics",
  rows:[
    ["Mirror formula","1/v + 1/u = 1/f"],
    ["Lens formula","1/v − 1/u = 1/f"],
    ["Lens maker's formula","1/f = (n−1)(1/R₁ − 1/R₂)"],
    ["Magnification","m = −v/u (mirror), m = v/u (lens)"],
    ["Snell's law","n₁sinθ₁ = n₂sinθ₂"],
    ["Critical angle","sin C = 1/n"],
    ["Young's double slit fringe width","β = λD/d"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Thermodynamics",
  title:"Thermodynamics and kinetic theory",
  rows:[
    ["First law","ΔU = Q + W"],
    ["Work in an isothermal process","W = nRT ln(V₂/V₁)"],
    ["Adiabatic relation","PVᵍ = constant (γ = Cp/Cv)"],
    ["Mayer's relation","Cp − Cv = R"],
    ["RMS speed of a gas molecule","v_rms = √(3RT/M)"],
    ["Carnot efficiency","η = 1 − T_c/T_h"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Gravitation",
  title:"Gravitation",
  rows:[
    ["Newton's law of gravitation","F = Gm₁m₂/r²"],
    ["Acceleration due to gravity","g = GM/R²"],
    ["Orbital velocity","v_o = √(GM/r)"],
    ["Escape velocity","v_e = √(2GM/R) ≈ 11.2 km/s on Earth"],
    ["Kepler's third law","T² ∝ r³"],
    ["Gravitational PE","U = −GMm/r"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Modern Physics",
  title:"Modern physics",
  rows:[
    ["Photoelectric equation","KE_max = hν − φ"],
    ["Bohr radius (H atom)","rₙ = n² × 0.529 Å"],
    ["Bohr energy (H atom)","Eₙ = −13.6/n² eV"],
    ["de Broglie wavelength","λ = h/p = h/mv"],
    ["Mass-energy equivalence","E = mc²"],
    ["Radioactive decay","N = N₀e⁻ᵗ ; t₁/₂ = 0.693/λ"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"9-10", type:"formula", topic:"Foundations (Class 9-10)",
  title:"Class 9-10 physics essentials",
  rows:[
    ["Speed / velocity","v = distance / time"],
    ["Newton's second law","F = ma"],
    ["Momentum","p = mv"],
    ["Work","W = F·d·cosθ"],
    ["Power","P = W/t"],
    ["Kinetic / potential energy","KE = ½mv² ; PE = mgh"],
    ["Archimedes' principle","upthrust = weight of fluid displaced"],
    ["Ohm's law","V = IR"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Electrostatics",
  title:"Reach for Gauss's law whenever there is symmetry",
  body:"For a symmetric charge distribution, skip integrating Coulomb's law and pick a Gaussian surface that matches the symmetry: sphere for a point/spherical charge, cylinder for a long wire, pillbox for a sheet. Standard results fall straight out — E = λ/2πε₀r for a wire, σ/2ε₀ for a sheet, and <b>zero inside a conductor or a hollow shell</b>." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Thermodynamics",
  title:"Work done is the area under the P-V curve",
  body:"Read work straight off the graph instead of integrating: area under the curve = work done by the gas. Isochoric (vertical line) → <b>W = 0</b>. Isobaric (horizontal) → W = PΔV, a rectangle. In a cyclic process the enclosed area is the net work — clockwise means work done <i>by</i> the gas, anticlockwise means work done <i>on</i> it." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Modern Physics",
  title:"Half-lives in powers of two",
  body:"After n half-lives the surviving fraction is simply <b>N₀/2ⁿ</b> — so 1/2, 1/4, 1/8, 1/16… Convert the elapsed time into a number of half-lives first (n = t/t₁⁄₂) and most decay MCQs need no logarithms at all." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Units & Measurement",
  title:"Eliminate options by order of magnitude",
  body:"Before computing anything, check the dimensions of each option and estimate the answer's power of ten. Wrong options in JEE/NEET physics are often off by a factor of 10 or carry the wrong units, so this alone can settle a question — and it always catches an arithmetic slip in your own working." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Fluid Mechanics",
  title:"Continuity first, then Bernoulli",
  body:"For any flow problem, apply continuity (A₁v₁ = A₂v₂) to get the speeds — a narrower pipe means faster flow — then feed those into Bernoulli's equation for the pressures. Because the two are linked, the counter-intuitive result follows immediately: where a fluid speeds up, its <b>pressure drops</b>." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Fluid Mechanics",
  title:"Mechanical properties of fluids",
  rows:[
    ["Pressure at depth h","P = P₀ + ρgh"],
    ["Buoyant force (Archimedes)","F = ρ_fluid · V_displaced · g"],
    ["Equation of continuity","A₁v₁ = A₂v₂"],
    ["Bernoulli's equation","P + ½ρv² + ρgh = constant"],
    ["Terminal velocity","v = 2r²(ρ − σ)g / 9η"],
    ["Excess pressure — drop / bubble","2S/R  ;  4S/R (soap bubble, two surfaces)"],
    ["Capillary rise","h = 2S cosθ / rρg"],
  ] },

/* ------------------- PHYSICS — chapters added later ------------------- */

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Alternating Current",
  title:"“CIVIL” — who leads in an AC circuit",
  body:"<b>C</b>: <b>I</b> leads <b>V</b> — in a <i>capacitor</i>, current leads voltage by 90°. <b>V</b> leads <b>I</b>: <b>L</b> — in an <i>inductor</i>, voltage leads current by 90°. Read the word as “CIV-IL” and both phase relationships fall out. In a pure resistor they stay in phase." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Alternating Current",
  title:"Everything about resonance in one condition",
  body:"At resonance X_L = X_C, and every other quantity follows: impedance is <b>minimum</b> (Z = R), current is <b>maximum</b>, the phase angle is zero and the power factor is <b>1</b>. Resonant frequency f = 1/(2π√(LC)). Spot “X_L = X_C” in a question and you can answer it without computing anything." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Alternating Current",
  title:"AC circuits",
  rows:[
    ["RMS values","I_rms = I₀/√2 ; V_rms = V₀/√2"],
    ["Inductive / capacitive reactance","X_L = ωL ; X_C = 1/ωC"],
    ["Impedance of a series LCR","Z = √(R² + (X_L − X_C)²)"],
    ["Phase angle","tanφ = (X_L − X_C)/R"],
    ["Average power","P = V_rms·I_rms·cosφ"],
    ["Resonant frequency","f₀ = 1/(2π√(LC))"],
    ["Quality factor","Q = (1/R)√(L/C)"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Collisions & Momentum",
  title:"Coefficient of restitution — the two ends of the scale",
  body:"e = <b>1</b> is perfectly <i>elastic</i> (kinetic energy conserved); e = <b>0</b> is perfectly <i>inelastic</i> (bodies stick together, maximum KE lost). Everything real sits between. Momentum is conserved in <b>every</b> collision — only kinetic energy is negotiable, which is the distinction questions hinge on." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Collisions & Momentum",
  title:"Equal masses in an elastic collision simply swap velocities",
  body:"For a one-dimensional elastic collision between equal masses, the two bodies <b>exchange velocities</b> — so if one was at rest, it moves off with the other's speed while the first stops dead. Recognising this saves solving the momentum and energy equations together." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Collisions & Momentum",
  title:"Momentum, impulse and collisions",
  rows:[
    ["Momentum","p = mv"],
    ["Impulse","J = FΔt = Δp"],
    ["Coefficient of restitution","e = (v₂ − v₁)/(u₁ − u₂)"],
    ["Elastic collision (final velocities)","v₁ = ((m₁−m₂)u₁ + 2m₂u₂)/(m₁+m₂)"],
    ["Perfectly inelastic (common velocity)","v = (m₁u₁ + m₂u₂)/(m₁+m₂)"],
    ["Height after n bounces","hₙ = h·e^(2n)"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Wave Optics",
  title:"Interference, diffraction, polarisation — what each one proves",
  body:"<b>Interference</b> and <b>diffraction</b> prove light is a <i>wave</i>; <b>polarisation</b> proves it is a <b>transverse</b> wave (sound, being longitudinal, cannot be polarised). The photoelectric effect is the one that proves the particle nature — a standard “which phenomenon shows what” question." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Wave Optics",
  title:"YDSE — read the fringe width as a ratio",
  body:"Since β = λD/d, you rarely need to compute it: doubling D doubles β, halving d doubles β, and immersing the setup in a medium of refractive index n <i>divides</i> β by n (because λ shrinks). Handle these as proportions and the arithmetic disappears." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Wave Optics",
  title:"Interference, diffraction and polarisation",
  rows:[
    ["Fringe width (YDSE)","β = λD/d"],
    ["Path difference — bright / dark","Δ = nλ ; Δ = (2n−1)λ/2"],
    ["Intensity of two sources","I = I₁ + I₂ + 2√(I₁I₂)cosφ"],
    ["Single-slit first minimum","a sinθ = λ"],
    ["Malus's law","I = I₀cos²θ"],
    ["Brewster's angle","tan i_p = n"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Nuclei",
  title:"Binding energy per nucleon peaks at iron",
  body:"The curve rises to about <b>8.8 MeV at Fe-56</b> and falls away on both sides. That single fact explains both processes: light nuclei <i>below</i> the peak release energy by <b>fusion</b>, heavy nuclei <i>above</i> it release energy by <b>fission</b> — because both move toward the more tightly bound middle." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Nuclei",
  title:"Nuclear physics",
  rows:[
    ["Nuclear radius","R = R₀A^(1/3), R₀ = 1.2 fm"],
    ["Mass defect","Δm = [Zm_p + (A−Z)m_n] − M_nucleus"],
    ["Binding energy","B.E. = Δm·c² (1 u = 931.5 MeV)"],
    ["Decay law","N = N₀e^(−λt)"],
    ["Half-life and mean life","t₁/₂ = 0.693/λ ; τ = 1/λ"],
    ["Activity","A = λN"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"EM Waves",
  title:"E, B and the direction of travel are mutually perpendicular",
  body:"In an electromagnetic wave <b>E ⊥ B ⊥ direction of propagation</b>, and the wave travels along <b>E × B</b>. The two fields are in phase, and their magnitudes are locked by <b>E₀ = cB₀</b> — so the electric field is numerically far larger, which is why light interacts with matter mainly through E." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"EM Waves",
  title:"Electromagnetic waves",
  rows:[
    ["Speed of light","c = 1/√(μ₀ε₀) = 3×10⁸ m/s"],
    ["Field ratio","E₀/B₀ = c"],
    ["Speed in a medium","v = c/n"],
    ["Intensity","I = ½ε₀E₀²c"],
    ["Momentum delivered (absorbed)","p = U/c"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Thermal Properties",
  title:"Three modes of heat transfer, and which needs what",
  body:"<b>Conduction</b> needs a medium and no bulk movement (solids). <b>Convection</b> needs a medium <i>and</i> bulk movement (fluids). <b>Radiation</b> needs <b>no medium at all</b> — which is why sunlight crosses empty space. That last point is the one most often tested." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Thermal Properties",
  title:"Calorimetry — heat lost equals heat gained",
  body:"Set heat lost by the hot body = heat gained by the cold body and solve for the unknown. Use Q = mcΔT while the temperature changes, and Q = mL while a <i>phase</i> changes (temperature stays constant through melting or boiling) — mixing those two up is the usual error." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Thermal Properties",
  title:"Heat, expansion and radiation",
  rows:[
    ["Heat for a temperature change","Q = mcΔT"],
    ["Latent heat","Q = mL"],
    ["Linear / areal / volume expansion","γ = 3α ; β = 2α"],
    ["Conduction rate","dQ/dt = kA(T₁−T₂)/L"],
    ["Stefan-Boltzmann law","E = σεAT⁴"],
    ["Wien's displacement law","λ_max·T = 2.9×10⁻³ m·K"],
    ["Newton's law of cooling","dT/dt ∝ (T − T_surroundings)"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Kinetic Theory & Gases",
  title:"Degrees of freedom set γ — count them and you are done",
  body:"Monatomic: 3 degrees of freedom, γ = <b>5/3</b> ≈ 1.67. Diatomic: 5, γ = <b>7/5</b> = 1.4. Polyatomic (non-linear): 6, γ = <b>4/3</b> ≈ 1.33. Each degree of freedom contributes ½kT per molecule, so Cv = (f/2)R and Cp = Cv + R — the whole chapter follows from f." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Kinetic Theory & Gases",
  title:"Kinetic theory",
  rows:[
    ["Pressure of an ideal gas","P = (1/3)ρv²_rms"],
    ["RMS / average / most probable speed","√(3RT/M) > √(8RT/πM) > √(2RT/M)"],
    ["Average KE per molecule","(3/2)kT"],
    ["Molar specific heats","Cv = (f/2)R ; Cp = Cv + R"],
    ["Ratio of specific heats","γ = 1 + 2/f"],
    ["Mean free path","λ = 1/(√2 nπd²)"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Laws of Motion",
  title:"Friction — starting is harder than continuing",
  body:"Limiting static friction is <i>greater</i> than kinetic friction (μ_s &gt; μ_k), which is exactly why a heavy box lurches once it finally starts sliding. Friction is independent of the contact <i>area</i> and of speed, and static friction is <b>self-adjusting</b> — it equals the applied force until it reaches its limit." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Work, Energy & Power",
  title:"Springs combine the opposite way to resistors",
  body:"Springs in <b>parallel</b> add stiffness (k = k₁ + k₂); springs in <b>series</b> add compliance (1/k = 1/k₁ + 1/k₂), so a series pair is <i>softer</i> than either. Cutting a spring into n equal pieces makes each one n times <b>stiffer</b> — a favourite one-liner." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Gravitation",
  title:"Escape velocity is just √2 times orbital velocity",
  body:"v_escape = √2 · v_orbital, so for a low Earth orbit 7.9 km/s becomes 11.2 km/s. Also useful: escape velocity does not depend on the mass or the direction of launch of the projectile, only on the planet." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Semiconductors",
  title:"Diode biasing and the universal gates",
  body:"<b>Forward bias</b> — p-side to the positive terminal, depletion layer narrows, current flows. <b>Reverse bias</b> — depletion layer widens, only a tiny leakage current. For logic: <b>NAND and NOR are the universal gates</b> — any other gate can be built from either alone." },

/* ==================================================================
   CHEMISTRY — MNEMONICS
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Redox Reactions",
  title:"Reactivity series — “Please Send Cats, Monkeys And Zebras To Insane Lunatic Hospitals; Cats Hate Practical Astrology, Get Home”",
  body:"K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au — most to least reactive. Metals <i>above</i> hydrogen displace it from dilute acids; those below don't react with dilute acids at all." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"9-10", type:"mnemonic", topic:"Redox Reactions",
  title:"OIL RIG — oxidation vs reduction",
  body:"<b>O</b>xidation <b>I</b>s <b>L</b>oss of electrons; <b>R</b>eduction <b>I</b>s <b>G</b>ain. The oxidising agent gets <i>reduced</i> and the reducing agent gets <i>oxidised</i> — the single most common trap in redox MCQs." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Organic Basics & Nomenclature",
  title:"Carbon chain prefixes — “Monkeys Eat Peanut Butter, People Hate Having Nine Oranges Daily”",
  body:"Meth(1), Eth(2), Prop(3), But(4), Pent(5), Hex(6), Hept(7), Oct(8), Non(9), Dec(10). Every IUPAC name in organic chemistry is built on this count of parent-chain carbons." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Chemical Bonding",
  title:"VSEPR shapes — count electron domains first",
  body:"2 domains → Linear (180°), 3 → Trigonal planar (120°), 4 → Tetrahedral (109.5°), 5 → Trigonal bipyramidal, 6 → Octahedral (90°). Then adjust: lone pairs repel harder, so LP-LP &gt; LP-BP &gt; BP-BP, pushing bond angles <i>below</i> the ideal value." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Atomic Structure",
  title:"Aufbau filling order — the diagonal rule",
  body:"1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d. Note 4s fills <i>before</i> 3d (lower n+l), which is exactly why the d-block starts at Sc — and why Cr and Cu break the pattern to gain half-filled/full-filled stability." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"9-10", type:"mnemonic", topic:"Periodic Table",
  title:"Period 2 and 3 elements in order",
  body:"Period 2 — “<b>H</b>e <b>Li</b>kes <b>Be</b>er <b>B</b>ut <b>C</b>an <b>N</b>ot <b>O</b>btain <b>F</b>ood <b>Ne</b>atly”: He, Li, Be, B, C, N, O, F, Ne. Period 3 — “<b>Na</b>ughty <b>Mg</b>, <b>Al</b>ways <b>Si</b>ngs <b>P</b>op <b>S</b>ongs <b>Cl</b>ub <b>Ar</b>ound”: Na, Mg, Al, Si, P, S, Cl, Ar." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"d & f-Block",
  title:"3d series — “Scary Titans Vanquish Chromium Managers; Iron Cobalt Nickel Copper Zinc”",
  body:"Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn — the first transition series. Remember the two anomalies: Cr is 3d⁵4s¹ and Cu is 3d¹⁰4s¹ (half-filled and fully-filled stability), and Zn with a full 3d¹⁰ shows almost no transition-metal character." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"s-Block & p-Block",
  title:"Alkali and alkaline earth metals",
  body:"Group 1 — “<b>Li</b>ttle <b>Na</b>ncy <b>K</b>issed <b>Rb</b>obert <b>Cs</b>o <b>Fr</b>equently”: Li, Na, K, Rb, Cs, Fr. Group 2 — “<b>Be</b>tty <b>Mg</b>oes <b>Ca</b>lling <b>Sr</b>traight <b>Ba</b>ck <b>Ra</b>pidly”: Be, Mg, Ca, Sr, Ba, Ra. Both groups get more reactive going down." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"s-Block & p-Block",
  title:"Halogens and noble gases",
  body:"Halogens (Gp 17) — F, Cl, Br, I, At: “<b>F</b>rogs <b>Cl</b>imb <b>Br</b>own <b>I</b>vy <b>At</b>tics” — all diatomic, all form 1− ions, reactivity <i>decreases</i> down the group. Noble gases (Gp 18) — He, Ne, Ar, Kr, Xe, Rn: “<b>He</b> <b>Ne</b>ver <b>Ar</b>gues, <b>Kr</b>eeps <b>Xe</b>rox <b>Rn</b>unning” — full octet, essentially inert." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"d & f-Block",
  title:"Lanthanides — “Lazy College Professors Never Produce Sufficiently Educated Graduates To Dye Hair Every Time You Look”",
  body:"La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu — the 4f series. All show a common +3 state and the steady size decrease across it is the lanthanoid contraction." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Hydrocarbons",
  title:"Markovnikov's rule — “the rich get richer”",
  body:"In HX addition to an unsymmetrical alkene, the <b>H</b> attaches to the carbon that <i>already has more hydrogens</i> (the “rich get richer”), putting the halide on the more substituted carbon — because that route goes via the more stable carbocation. With peroxides present, the anti-Markovnikov (free-radical) product forms instead." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Reaction Mechanisms",
  title:"Electrophile vs nucleophile — read the name",
  body:"<b>Electro</b>phile = “electron-loving” → it is electron <i>deficient</i> and attacks electron-rich sites (e.g. H⁺, NO₂⁺, BF₃). <b>Nucleo</b>phile = “nucleus-loving” → it is electron <i>rich</i> and attacks electron-poor carbons (e.g. OH⁻, CN⁻, NH₃). Every mechanism arrow starts at the nucleophile." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Reaction Mechanisms",
  title:"Ortho/para vs meta directors",
  body:"<b>Activating</b> groups (−OH, −NH₂, −OR, −R) push electrons in and direct <b>ortho/para</b>. <b>Deactivating</b> groups (−NO₂, −CN, −COOH, −SO₃H, −CHO) pull electrons out and direct <b>meta</b>. The exception worth memorising: <b>halogens</b> are deactivating but still o/p directing." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Solutions & Colligative Properties",
  title:"Four colligative properties — “RED-O”",
  body:"<b>R</b>elative lowering of vapour pressure, <b>E</b>levation of boiling point, <b>D</b>epression of freezing point, <b>O</b>smotic pressure. All four depend only on the <i>number</i> of solute particles, never on their identity — which is why the van't Hoff factor i matters for electrolytes." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Qualitative Analysis",
  title:"Flame test colours",
  body:"Li — crimson red, Na — golden yellow, K — lilac/violet, Ca — brick red, Sr — crimson, Ba — apple green, Cu — blue-green. Memory hook: “<b>Na</b> is <b>Na</b>tural gold, <b>Ba</b>rium is a green <b>Ba</b>nana, <b>Cu</b> is <b>Cu</b>ol blue-green.”" },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Qualitative Analysis",
  title:"Solubility rules worth memorising",
  body:"<b>All</b> nitrates, and <b>all</b> Group 1 and ammonium salts, are soluble. Most sulphates are soluble <i>except</i> BaSO₄, PbSO₄ (and CaSO₄ is only slightly soluble). Most chlorides are soluble <i>except</i> AgCl, PbCl₂, Hg₂Cl₂. Memory line: “Nitrates never fail; silver and lead spoil the chlorides; barium and lead spoil the sulphates.”" },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Functional Group Tests",
  title:"Which test identifies which group",
  body:"<b>Tollens'</b> (ammoniacal AgNO₃) → silver mirror with any <i>aldehyde</i>. <b>Fehling's</b> → red-brown Cu₂O ppt with <i>aliphatic</i> aldehydes only (aromatic ones fail). <b>Lucas</b> reagent → turbidity fastest for 3° &gt; 2° &gt; 1° <i>alcohols</i>. <b>Iodoform</b> test → yellow ppt for <i>methyl ketones</i> and ethanol. <b>Bromine water</b> decolourised → unsaturation." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Industrial Processes",
  title:"Big three industrial processes and their catalysts",
  body:"<b>Haber</b> — NH₃ from N₂ + H₂, catalyst <b>Fe</b>. <b>Contact</b> — H₂SO₄ via SO₃, catalyst <b>V₂O₅</b>. <b>Ostwald</b> — HNO₃ from NH₃, catalyst <b>Pt</b>. Hook: “Haber has Iron nerves, Contact needs Vanadium, Ostwald pays Platinum.”" },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Coordination Compounds",
  title:"Naming order for coordination compounds",
  body:"Cation first, then anion. Within the complex: <b>ligands alphabetically</b>, then the metal with its oxidation state in Roman numerals. If the complex ion is <i>negative</i>, the metal takes the “-ate” suffix (ferrate, cuprate, argentate). Common ligand names: aqua (H₂O), ammine (NH₃), carbonyl (CO), chlorido (Cl⁻), cyanido (CN⁻)." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Stereochemistry",
  title:"Types of isomerism at a glance",
  body:"<b>Structural</b>: chain, position, functional, metamerism, tautomerism. <b>Stereo</b>: geometrical (cis/trans, needs restricted rotation) and optical (needs chirality). Quick test: same molecular formula but different <i>connectivity</i> = structural; same connectivity, different <i>spatial arrangement</i> = stereo." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Equilibrium",
  title:"Le Chatelier — “the system undoes what you do”",
  body:"Add reactant → shifts forward. Increase pressure → shifts to the side with <i>fewer</i> gas moles. Increase temperature → shifts in the <b>endothermic</b> direction. A catalyst shifts <i>nothing</i> — it only speeds both directions equally (a favourite MCQ trap)." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Periodic trends — “across shrinks, down grows”",
  body:"Left→right across a period: atomic radius <i>decreases</i>, while ionisation energy, electronegativity and electron affinity <i>increase</i> (Z_eff rises). Top→bottom down a group: radius <i>increases</i> and those three <i>decrease</i>. Every trend question reduces to effective nuclear charge vs number of shells." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Electrochemistry",
  title:"Anode vs cathode — “An Ox and a Red Cat”",
  body:"<b>An</b>ode = <b>Ox</b>idation; <b>Red</b>uction = <b>Cat</b>hode. True for both galvanic and electrolytic cells — only the <i>sign</i> of the electrode changes between them (anode is negative in a galvanic cell, positive in an electrolytic one)." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Named Reactions",
  title:"Name-reaction quick hooks",
  body:"<b>Cannizzaro</b> — aldehydes with no α-H disproportionate (needs conc. alkali). <b>Aldol</b> — needs α-H, gives β-hydroxy carbonyl. <b>Perkin</b> — aromatic aldehyde + anhydride → cinnamic acid. <b>Sandmeyer</b> — diazonium → aryl halide (Cu salts). <b>Hoffmann bromamide</b> — amide → amine with one carbon <i>less</i>. Hook: “no α-H → Cannizzaro; has α-H → Aldol.”" },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"s-Block & p-Block",
  title:"p-block groups 13 to 16 in one go",
  body:"<b>Group 13</b> — B, Al, Ga, In, Tl: “<b>B</b>ears <b>Al</b>ways <b>Ga</b>ve <b>In</b>dians <b>T</b>rouble.” <b>Group 14</b> — C, Si, Ge, Sn, Pb: “<b>C</b>hemistry <b>Si</b>r <b>Ge</b>ts <b>Sn</b>eaky <b>P</b>roblems.” <b>Group 15</b> — N, P, As, Sb, Bi: “<b>N</b>ana <b>P</b>atekar <b>As</b>ks <b>Sb</b>out <b>Bi</b>ology.” <b>Group 16</b> — O, S, Se, Te, Po: “<b>O</b>ld <b>S</b>tyle <b>Se</b>rves <b>Te</b>a <b>Po</b>ts.” Metallic character increases down every one of these groups." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Electronegativity order — “F O Cl N Br I S C H P”",
  body:"F &gt; O &gt; Cl &gt; N &gt; Br &gt; I &gt; S &gt; C &gt; H &gt; P on the Pauling scale. Fluorine is the most electronegative element, period. Knowing just the top four settles most bond-polarity, acidity and inductive-effect comparisons you will be asked." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Abundance in the Earth's crust — “Only Silly Alchemists Fear Calcium, Sodium, Potassium, Magnesium”",
  body:"O &gt; Si &gt; Al &gt; Fe &gt; Ca &gt; Na &gt; K &gt; Mg. Oxygen alone is about 46% and silicon about 28%, so the two together make up roughly three-quarters of the crust — and <b>aluminium is the most abundant metal</b>, a frequently asked one-liner." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Atomic Structure",
  title:"Orbital letters — “Sober Physicists Don't Find Giraffes Hiding In Kitchens”",
  body:"s, p, d, f, g, h, i, k — the subshell letters in order of azimuthal quantum number l = 0, 1, 2, 3… (only s, p, d and f matter for the syllabus). Each holds 2(2l+1) electrons: s → 2, p → 6, d → 10, f → 14." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"9-10", type:"mnemonic", topic:"Redox Reactions",
  title:"Cations are “paw-sitive”",
  body:"A <b>cat</b>ion is positive (cats have <i>paws</i> → “pawsitive”) and is formed by <i>losing</i> electrons; an <b>an</b>ion is negative (“<b>A n</b>egative ion”) and forms by <i>gaining</i> them. Pair it with electrode logic: cations travel to the cathode, anions to the anode." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Thermodynamics",
  title:"“Good Honey Tastes Sweet” — the Gibbs equation",
  body:"<b>G</b> = <b>H</b> − <b>T</b><b>S</b>, i.e. ΔG = ΔH − TΔS. Read the signs off it directly: exothermic (ΔH &lt; 0) with increasing disorder (ΔS &gt; 0) is spontaneous at <i>every</i> temperature, while the mixed cases flip over at T = ΔH/ΔS." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Named Reactions",
  title:"LiAlH₄ is the strong reducer, NaBH₄ the gentle one",
  body:"<b>LiAlH₄</b> is powerful enough to reduce esters, carboxylic acids, amides and nitriles as well as aldehydes and ketones. <b>NaBH₄</b> is mild — it touches only aldehydes and ketones. Hook: “<b>Li</b>on is strong, <b>Na</b>ughty boy is weak.” Choosing between them is a standard one-mark question." },

/* ==================================================================
   CHEMISTRY — SHORTCUTS
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Chemical Bonding",
  title:"Hybridisation from steric number in one step",
  body:"Steric number = σ-bonds + lone pairs on the central atom. SN 2 → sp, 3 → sp², 4 → sp³, 5 → sp³d, 6 → sp³d². Faster route for main-group species: H = ½(V + M − C + A), where V is valence electrons of the central atom, M monovalent atoms, C cationic charge, A anionic charge." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Reaction Mechanisms",
  title:"SN1 / SN2 / E1 / E2 — the four-question filter",
  body:"1) Substrate: 3° → SN1/E1; 1° → SN2/E2 (backside attack is blocked in 3°). 2) Strong nucleophile/base + polar <i>aprotic</i> solvent → SN2/E2. 3) Weak nucleophile + polar <i>protic</i> solvent → SN1/E1. 4) Bulky base (t-BuOK) → elimination wins. Run these four checks in order instead of memorising every case." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Equilibrium",
  title:"Henderson-Hasselbalch shortcut",
  body:"pH = pKa + log([salt]/[acid]). When acid and conjugate base are present in <i>equal</i> moles, the log term is zero and <b>pH = pKa</b> exactly — a no-calculation answer that appears in buffer MCQs constantly." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Redox Reactions",
  title:"Oxidation number assignment — fixed order",
  body:"Assign in this sequence and conflicts disappear: F = −1 always; O = −2 (except peroxides −1, OF₂ +2); H = +1 (except metal hydrides −1); Group 1 = +1, Group 2 = +2; then let the unknown atom absorb whatever is needed to make the total equal the overall charge." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Redox Reactions",
  title:"Ion-electron balancing — the six-step order",
  body:"(1) Balance atoms other than O and H. (2) Balance O with H₂O. (3) Balance H with H⁺. (4) Balance charge with electrons. (5) Scale the half-reactions so electrons cancel. (6) Add them. For basic medium, finish by adding OH⁻ to both sides to neutralise the H⁺." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Stereochemistry",
  title:"Spot a chiral centre fast",
  body:"A carbon is a stereocentre only if it carries <b>four different</b> groups. Scan each sp³ carbon and eliminate it the instant you find two identical substituents — no 3D model needed. Then n stereocentres give up to 2ⁿ stereoisomers (fewer if meso forms exist)." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Organic Basics & Nomenclature",
  title:"Degree of unsaturation reveals the structure",
  body:"DoU = (2C + 2 + N − H − X)/2. Each unit means one ring or one double bond; a DoU of 4 almost always signals a benzene ring. Compute it first in structure-elucidation problems and the possibilities collapse immediately." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Mole Concept & Stoichiometry",
  title:"Limiting reagent without trial and error",
  body:"Divide the moles of each reactant by its stoichiometric coefficient — the <b>smallest</b> quotient is the limiting reagent. Everything else (yield, excess remaining) follows from that reagent alone." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"9-10", type:"shortcut", topic:"Mole Concept & Stoichiometry",
  title:"Empirical formula from percentage composition",
  body:"Divide each element's percentage by its atomic mass, then divide all the results by the smallest one to get a whole-number ratio (multiply through if you land on .5 or .33). Molecular formula = n × empirical formula, where n = molar mass / empirical formula mass." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Chemical Kinetics",
  title:"Read the reaction order off the rate constant's units",
  body:"Units of k are mol¹⁻ⁿ L ⁿ⁻¹ s⁻¹ for an nth-order reaction. So s⁻¹ → first order; L mol⁻¹ s⁻¹ → second order; mol L⁻¹ s⁻¹ → zero order. The units alone answer many kinetics MCQs." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Reaction Mechanisms",
  title:"Rank stability: carbocations, radicals and conjugate bases",
  body:"Carbocations and radicals: 3° &gt; 2° &gt; 1° &gt; methyl, but <i>resonance beats hyperconjugation</i> (benzylic and allylic outrank 3°). For acid strength, whatever <b>stabilises the conjugate base</b> wins — electron-withdrawing groups strengthen the acid, electron-donating groups weaken it." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Solutions & Colligative Properties",
  title:"van't Hoff factor by counting ions",
  body:"For a strong electrolyte, i = number of ions it dissociates into: NaCl → 2, CaCl₂ → 3, K₂SO₄ → 3, glucose → 1. Multiply every colligative formula by i. If association occurs instead (e.g. dimerisation in benzene), i drops below 1." },

/* ==================================================================
   CHEMISTRY — FORMULA TABLES
   ================================================================== */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Mole Concept & Stoichiometry",
  title:"Mole concept and concentration",
  rows:[
    ["Moles from mass","n = mass / molar mass"],
    ["Moles of a gas at STP","n = V(L) / 22.4"],
    ["Number of particles","N = n × 6.022×10²³"],
    ["Molarity","M = moles solute / volume of solution (L)"],
    ["Molality","m = moles solute / mass of solvent (kg)"],
    ["Mole fraction","x_A = n_A / (n_A + n_B)"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Kinetic Theory & Gases",
  title:"Gas laws",
  rows:[
    ["Ideal gas equation","PV = nRT (R = 0.0821 L·atm/mol·K)"],
    ["Boyle's law","P₁V₁ = P₂V₂"],
    ["Charles's law","V₁/T₁ = V₂/T₂"],
    ["Combined gas law","P₁V₁/T₁ = P₂V₂/T₂"],
    ["Dalton's law of partial pressures","P_total = ΣPᵢ"],
    ["Graham's law of diffusion","r₁/r₂ = √(M₂/M₁)"],
    ["Van der Waals equation","(P + an²/V²)(V − nb) = nRT"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Thermodynamics",
  title:"Chemical thermodynamics",
  rows:[
    ["First law","ΔU = q + w"],
    ["Enthalpy","ΔH = ΔU + PΔV"],
    ["Gibbs free energy","ΔG = ΔH − TΔS"],
    ["Spontaneity test","ΔG < 0 spontaneous ; ΔG = 0 equilibrium"],
    ["Gibbs and equilibrium","ΔG° = −RT ln K"],
    ["Hess's law","ΔH_total = ΣΔH_steps"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Equilibrium",
  title:"Equilibrium and ionic equilibrium",
  rows:[
    ["Equilibrium constant","K_c = [products]/[reactants] (at equilibrium)"],
    ["Kp and Kc relation","K_p = K_c(RT)^Δn"],
    ["pH and pOH","pH = −log[H⁺] ; pH + pOH = 14"],
    ["Weak acid dissociation","[H⁺] = √(K_a·C)"],
    ["Henderson-Hasselbalch","pH = pK_a + log([salt]/[acid])"],
    ["Solubility product (AB type)","K_sp = s²"],
  ] },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Electrochemistry",
  title:"Electrochemistry",
  rows:[
    ["Cell EMF","E°_cell = E°_cathode − E°_anode"],
    ["Nernst equation","E = E° − (0.059/n)·log Q (at 298 K)"],
    ["Gibbs energy and EMF","ΔG° = −nFE°"],
    ["Faraday's first law","m = ZIt = (E·I·t)/96500"],
    ["Molar conductivity","Λ_m = κ×1000/C"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Chemical Kinetics",
  title:"Chemical kinetics",
  rows:[
    ["Rate law","rate = k[A]^m[B]^n"],
    ["First-order integrated rate","k = (2.303/t)·log(a/(a−x))"],
    ["First-order half-life","t₁/₂ = 0.693/k (independent of concentration)"],
    ["Zero-order half-life","t₁/₂ = [A]₀/2k"],
    ["Arrhenius equation","k = Ae^(−Ea/RT)"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Solutions & Colligative Properties",
  title:"Colligative properties",
  rows:[
    ["Relative lowering of vapour pressure","(P° − P)/P° = x_solute"],
    ["Elevation of boiling point","ΔT_b = i·K_b·m"],
    ["Depression of freezing point","ΔT_f = i·K_f·m"],
    ["Osmotic pressure","π = i·CRT"],
    ["Raoult's law","P_total = x_A P°_A + x_B P°_B"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Atomic Structure",
  title:"Atomic structure",
  rows:[
    ["Energy of nth orbit (H)","Eₙ = −13.6/n² eV"],
    ["Radius of nth orbit (H)","rₙ = 0.529 n² Å"],
    ["Rydberg equation","1/λ = R(1/n₁² − 1/n₂²)"],
    ["de Broglie wavelength","λ = h/mv"],
    ["Heisenberg uncertainty","Δx·Δp ≥ h/4π"],
    ["Max electrons in a shell / subshell","2n² ; 2(2l+1)"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"9-10", type:"formula", topic:"Foundations (Class 9-10)",
  title:"Class 9-10 chemistry essentials",
  rows:[
    ["Avogadro number","1 mole = 6.022×10²³ particles"],
    ["Molar volume at STP","1 mole of any gas = 22.4 L"],
    ["pH scale","pH = −log[H⁺] (7 neutral, <7 acid, >7 base)"],
    ["Law of conservation of mass","mass of reactants = mass of products"],
    ["Valency shortcut","group number gives valency for main-group elements"],
  ] },

/* ------------------ CHEMISTRY — chapters added later ------------------ */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Solid State",
  title:"Packing efficiency — 52, 68, 74",
  body:"Simple cubic <b>52.4%</b>, body-centred cubic <b>68%</b>, and face-centred cubic (ccp) and hcp both <b>74%</b> — the densest possible packing of equal spheres. Remember the trio “52-68-74” and note the last two are equal, which is the point students most often miss." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Solid State",
  title:"Counting atoms in a unit cell by position",
  body:"A <b>corner</b> atom counts 1/8, an <b>edge</b> atom 1/4, a <b>face</b> atom 1/2, and a <b>body-centre</b> atom 1. Add them up: simple cubic = <b>1</b>, bcc = <b>2</b>, fcc = <b>4</b> atoms per cell. Every “atoms per unit cell” and density question starts here." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Solid State",
  title:"Schottky lowers density, Frenkel does not",
  body:"<b>Schottky</b> — a cation <i>and</i> an anion are both missing, so mass is lost and <b>density falls</b>; it needs ions of similar size (NaCl, KCl, CsCl). <b>Frenkel</b> — an ion merely shifts into an interstitial site, so nothing leaves and <b>density is unchanged</b>; it needs a large size difference (ZnS, AgCl, AgBr)." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Solid State",
  title:"Solid state",
  rows:[
    ["Atoms per unit cell","SC 1 ; BCC 2 ; FCC 4"],
    ["Packing efficiency","SC 52.4% ; BCC 68% ; FCC/HCP 74%"],
    ["Density of a unit cell","ρ = Z·M / (a³·N_A)"],
    ["Radius relation — BCC","r = √3a/4"],
    ["Radius relation — FCC","r = a/(2√2)"],
    ["Coordination number","SC 6 ; BCC 8 ; FCC/HCP 12"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Surface Chemistry",
  title:"Physisorption vs chemisorption",
  body:"<b>Physisorption</b> — weak van der Waals forces, low enthalpy (20-40 kJ/mol), reversible, multilayer, <i>decreases</i> with temperature. <b>Chemisorption</b> — actual chemical bonds, high enthalpy (80-240 kJ/mol), irreversible, monolayer, <i>increases</i> with temperature then falls. Hook: “physical is feeble, chemical is committed.”" },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Surface Chemistry",
  title:"Tyndall effect identifies a colloid",
  body:"Only <b>colloids</b> scatter a beam of light into a visible path — true solutions do not (particles too small) and suspensions simply block it. Also worth pairing: <b>lyophilic</b> sols are solvent-loving and reversible, <b>lyophobic</b> sols are solvent-hating and need a stabiliser." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Metallurgy",
  title:"Roasting vs calcination — sulphide or carbonate?",
  body:"<b>Roasting</b> heats a <b>sulphide</b> ore in <i>excess air</i> (S is oxidised away as SO₂). <b>Calcination</b> heats a <b>carbonate</b> or hydrated ore in <i>limited or no air</i> (CO₂ or water driven off). Hook: “<b>R</b>oasting needs ai<b>R</b>; <b>C</b>alcination handles <b>C</b>arbonates.”" },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Amines",
  title:"Amine basicity in water is 2° > 1° > 3° > NH₃",
  body:"Two effects fight: alkyl groups push electrons in (+I, raising basicity) but also crowd the nitrogen and block solvation of the cation. The result for <b>methyl</b>amines in water is (CH₃)₂NH &gt; CH₃NH₂ &gt; (CH₃)₃N &gt; NH₃ — the 3° amine falls <i>below</i> the 1°. In the <i>gas phase</i>, with no solvation, the plain 3° &gt; 2° &gt; 1° order is restored." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Amines",
  title:"Hinsberg's test separates 1°, 2° and 3° amines",
  body:"With benzenesulphonyl chloride: a <b>1°</b> amine gives a product <i>soluble</i> in alkali (it still has an acidic N-H), a <b>2°</b> amine gives a product <i>insoluble</i> in alkali (no N-H left), and a <b>3°</b> amine <b>does not react</b> at all. Solubility in NaOH is the discriminator." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Alcohols, Phenols & Ethers",
  title:"Acidity: carboxylic acid > phenol > water > alcohol",
  body:"Phenol is acidic enough to dissolve in NaOH but <i>not</i> in NaHCO₃; a carboxylic acid dissolves in both — that pair of tests distinguishes them. The reason is resonance: a phenoxide spreads its charge into the ring, an alkoxide cannot, so alcohols are weaker acids than even water." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Alcohols, Phenols & Ethers",
  title:"Dehydration and every other alcohol order runs 3° > 2° > 1°",
  body:"Ease of dehydration to an alkene follows carbocation stability, so <b>3° &gt; 2° &gt; 1°</b> — the same order as the Lucas test and as SN1 reactivity. Oxidation runs the other way in kind, not speed: 1° → aldehyde → acid, 2° → ketone, 3° → <b>no oxidation</b> without breaking the chain." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Aldehydes, Ketones & Acids",
  title:"Aldehydes beat ketones for nucleophilic addition",
  body:"An aldehyde's carbonyl carbon is both <i>less crowded</i> (only one alkyl group) and <i>more positive</i> (less electron donation), so it is more reactive: HCHO &gt; CH₃CHO &gt; ketones. The same logic explains why only aldehydes reduce Tollens' and Fehling's reagents." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Haloalkanes & Haloarenes",
  title:"C-X bond strength falls down the group, so reactivity rises",
  body:"Bond strength C-F &gt; C-Cl &gt; C-Br &gt; C-I, therefore reactivity in substitution is the <b>reverse</b>: R-I &gt; R-Br &gt; R-Cl &gt; R-F. Haloarenes are far less reactive than haloalkanes because the C-X bond gains partial double-bond character through resonance with the ring." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Biomolecules",
  title:"Sucrose is the non-reducing one",
  body:"Glucose, fructose, maltose and lactose all <b>reduce</b> Tollens'/Fehling's; <b>sucrose does not</b>, because both anomeric carbons are locked in its glycosidic linkage. Also pair: glucose is an <b>aldo</b>hexose, fructose a <b>keto</b>hexose, and sucrose hydrolyses to glucose + fructose (invert sugar)." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Biomolecules",
  title:"Four levels of protein structure",
  body:"<b>Primary</b> — the amino-acid sequence (peptide bonds). <b>Secondary</b> — α-helix and β-pleated sheet (hydrogen bonds). <b>Tertiary</b> — the overall 3D fold. <b>Quaternary</b> — several chains together (haemoglobin's four). Denaturation destroys secondary and tertiary structure but leaves the <i>primary</i> sequence intact." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Polymers",
  title:"Addition vs condensation, and the numbers in Nylon",
  body:"<b>Addition</b> polymers just stack monomers with no by-product (polythene, PVC, Teflon); <b>condensation</b> polymers expel a small molecule such as water (nylon, terylene, bakelite). <b>Nylon-6,6</b> is named for its two 6-carbon monomers — hexamethylenediamine and adipic acid — while Nylon-6 comes from a single monomer, caprolactam." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Environmental Chemistry",
  title:"The real greenhouse gases",
  body:"<b>CO₂, CH₄, N₂O, CFCs, ozone and water vapour</b> trap heat. Note what is <i>not</i> on the list: <b>oxygen and nitrogen are not greenhouse gases</b> (symmetric diatomic molecules have no dipole to absorb infrared) — a widely repeated mnemonic gets this wrong. Ozone depletion is a separate problem, driven by CFCs releasing chlorine radicals." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Biomolecules",
  title:"Biomolecules quick reference",
  rows:[
    ["Reducing sugars","glucose, fructose, maltose, lactose (not sucrose)"],
    ["Glucose / fructose","aldohexose / ketohexose"],
    ["Sucrose on hydrolysis","glucose + fructose (invert sugar)"],
    ["Starch / cellulose linkage","α-glycosidic / β-glycosidic"],
    ["Protein bond","peptide (−CONH−)"],
    ["DNA vs RNA sugar","deoxyribose / ribose"],
    ["DNA vs RNA base","thymine / uracil"],
    ["Vitamins — fat soluble","A, D, E, K"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Surface Chemistry",
  title:"Adsorption and colloids",
  rows:[
    ["Freundlich isotherm","x/m = k·p^(1/n)"],
    ["Physisorption enthalpy","20-40 kJ/mol (reversible, multilayer)"],
    ["Chemisorption enthalpy","80-240 kJ/mol (irreversible, monolayer)"],
    ["Tyndall effect","light scattering — identifies a colloid"],
    ["Hardy-Schulze rule","higher ion charge → stronger coagulation"],
    ["Emulsion types","o/w (milk) and w/o (butter)"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Metallurgy",
  title:"Principles of metal extraction",
  rows:[
    ["Concentration of ore","froth flotation (sulphides), magnetic, leaching"],
    ["Roasting","sulphide ore + excess air → oxide + SO₂"],
    ["Calcination","carbonate/hydrated ore heated in limited air → oxide"],
    ["Reduction","oxide + C or CO → metal (smelting)"],
    ["Refining","electrolytic, zone refining (Si, Ge), van Arkel (Ti, Zr)"],
    ["Ellingham diagram","tells which reducing agent works at what temperature"],
  ] },

/* ==================================================================
   MATHS — MNEMONICS
   ================================================================== */

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Trigonometry",
  title:"ASTC — “All Students Take Coffee” (signs by quadrant)",
  body:"Quadrant I: <b>A</b>ll positive. II: <b>S</b>in (and cosec) positive. III: <b>T</b>an (and cot) positive. IV: <b>C</b>os (and sec) positive. Read anticlockwise from Quadrant I." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Trigonometry",
  title:"SOH-CAH-TOA",
  body:"<b>S</b>in = <b>O</b>pposite/<b>H</b>ypotenuse, <b>C</b>os = <b>A</b>djacent/<b>H</b>ypotenuse, <b>T</b>an = <b>O</b>pposite/<b>A</b>djacent. Cosec, sec and cot are simply the reciprocals — note that sec pairs with cos (not sin), which is the usual slip." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Trigonometry",
  title:"Trig table without memorising — the √ pattern",
  body:"For 0°, 30°, 45°, 60°, 90°, write sin as √0/2, √1/2, √2/2, √3/2, √4/2 → 0, ½, 1/√2, √3/2, 1. Cos is the same list <i>reversed</i>. Tan = sin/cos. One pattern replaces the whole table." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Integration",
  title:"LIATE — choosing u in integration by parts",
  body:"Prefer as “u” (the part you differentiate) whichever comes first in: <b>L</b>ogarithmic, <b>I</b>nverse trig, <b>A</b>lgebraic, <b>T</b>rigonometric, <b>E</b>xponential. This ordering makes the second integral simpler and usually finishes in one pass." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Basic Algebra",
  title:"BODMAS — order of operations",
  body:"<b>B</b>rackets, <b>O</b>rders (powers/roots), <b>D</b>ivision and <b>M</b>ultiplication (left to right), <b>A</b>ddition and <b>S</b>ubtraction (left to right). Division and multiplication share a rank — as do addition and subtraction, which is where most sign errors creep in." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Conic Sections",
  title:"Eccentricity tells you the conic",
  body:"e = 0 → circle; e &lt; 1 → ellipse; e = 1 → parabola; e &gt; 1 → hyperbola. Memory line: “zero is round, less is squashed, one is open, more is split.” Discriminant route for ax²+bxy+cy²+…: b²−4ac &lt; 0 ellipse, = 0 parabola, &gt; 0 hyperbola." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Sequences & Series",
  title:"AM ≥ GM ≥ HM (always, for positive numbers)",
  body:"Arithmetic mean ≥ Geometric mean ≥ Harmonic mean, with equality only when all terms are equal. Also GM² = AM × HM for two numbers. Alphabetical order (A, G, H) is also the descending order of size — that's the mnemonic." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Vectors & 3D Geometry",
  title:"BAC-CAB rule for the vector triple product",
  body:"a × (b × c) = <b>b</b>(<b>a·c</b>) − <b>c</b>(<b>a·b</b>) — read aloud as “BAC minus CAB.” The vector nearest the inner bracket comes first, and note the result lies in the plane of b and c." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Logarithms",
  title:"Log laws — multiply becomes add",
  body:"log(mn) = log m + log n; log(m/n) = log m − log n; log(mⁿ) = n log m. Memory line: “multiply → add, divide → subtract, power → multiply out front.” Also log_b(b) = 1 and log_b(1) = 0, always." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Differentiation",
  title:"Trig derivatives — “co- functions carry the minus”",
  body:"d/dx: sin → cos, tan → sec², sec → sec·tan (all positive), while <b>cos → −sin, cot → −cosec², cosec → −cosec·cot</b> (the “co-” ones get the negative sign). One rule fixes six formulas." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Matrices & Determinants",
  title:"Matrix multiplication — “row into column”, and order matters",
  body:"Element (i,j) of AB = row i of A dotted with column j of B. Multiplication is possible only when columns of A = rows of B, and the result is (rows of A × columns of B). Remember AB ≠ BA in general — matrices don't commute." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"mnemonic", topic:"Coordinate Geometry",
  title:"Quadrant signs for coordinates",
  body:"I: (+,+), II: (−,+), III: (−,−), IV: (+,−). Going anticlockwise, x flips sign first, then y. Pair this with ASTC and both coordinate and trig sign questions become automatic." },

/* ==================================================================
   MATHS — SHORTCUTS
   ================================================================== */

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Squaring any number ending in 5",
  body:"For “n5”, the square is n×(n+1) followed by 25. So 65² → 6×7 = 42 → <b>4225</b>; 85² → 8×9 = 72 → <b>7225</b>. Instant for 15 through 95." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Multiplying a two-digit number by 11",
  body:"For “ab” × 11: write a, then (a+b), then b, carrying if (a+b) ≥ 10. So 43×11 → 4, 7, 3 = <b>473</b>; 47×11 → 4, (11 → carry 1), 7 → <b>517</b>." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Nikhilam — multiplying numbers near a base",
  body:"For numbers just below 100, take deficits from 100: 96×97 → deficits 4 and 3. Left half = 100 − (4+3) = 93; right half = 4×3 = 12 → <b>9312</b>. Same idea works near 1000 (pad the right half to three digits)." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Squaring numbers near 50",
  body:"(50+x)² = 2500 + 100x + x². So 53² = 2500 + 300 + 9 = <b>2809</b>; 47² = 2500 − 300 + 9 = <b>2209</b>. Works for any base you know the square of — the general identity is (a±b)² = a² ± 2ab + b²." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Divisibility rules worth having instantly",
  body:"<b>3</b>/<b>9</b>: digit sum divisible by 3/9. <b>4</b>: last two digits divisible by 4. <b>8</b>: last three digits. <b>6</b>: divisible by both 2 and 3. <b>11</b>: alternating digit sum difference is 0 or a multiple of 11. <b>7</b>: double the last digit, subtract from the rest, repeat." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Check any answer with digital roots (casting out nines)",
  body:"Reduce each number to its repeated digit sum, apply the same operation, and compare with the digital root of your answer. If they disagree, the answer is definitely wrong. A two-second audit on long multiplications." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Quadratic Equations",
  title:"Sum and product of roots",
  body:"For ax² + bx + c = 0: sum = −b/a, product = c/a. Build an equation from its roots as x² − (sum)x + (product) = 0, and use the discriminant D = b² − 4ac to classify roots (D &gt; 0 real distinct, = 0 equal, &lt; 0 complex) without solving." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Permutations & Combinations",
  title:"Permutation or combination? Ask one question",
  body:"Does rearranging the chosen items create a <i>new</i> outcome? Yes → permutation (nPr): arrangements, passwords, seating. No → combination (nCr): teams, committees, handshakes. This single test resolves most P&amp;C confusion." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Permutations & Combinations",
  title:"nCr identities that save time",
  body:"nC0 = nCn = 1; nCr = nC(n−r) (so compute the smaller r); nCr + nC(r−1) = (n+1)Cr (Pascal); ΣnCr from r=0 to n = 2ⁿ. Choosing r = n−r symmetry alone often turns a big computation into a small one." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Matrices & Determinants",
  title:"Determinants — Sarrus' diagonal method",
  body:"2×2: det = ad − bc. 3×3: rewrite the first two columns to the right of the matrix, add the three products along the ↘ diagonals and subtract the three along the ↙ diagonals. Faster than cofactor expansion when no zeros are available." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Complex Numbers",
  title:"De Moivre for powers and roots",
  body:"Write z = r(cosθ + i sinθ), then zⁿ = rⁿ(cos nθ + i sin nθ). For nth roots, use θ/n + 2πk/n for k = 0…n−1 — they sit equally spaced on a circle of radius r^(1/n). Far faster than binomial expansion for n ≥ 3." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Integration",
  title:"Definite integral symmetry properties",
  body:"∫₋ₐᵃ f(x)dx = 0 if f is <b>odd</b>, and = 2∫₀ᵃ f(x)dx if f is <b>even</b>. Also ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx — the “king property,” which cracks integrals like ∫₀^(π/2) sinˣ/(sinˣ+cosˣ) in two lines by adding the two forms." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Limits & Continuity",
  title:"L'Hôpital and the standard limits",
  body:"For 0/0 or ∞/∞, differentiate numerator and denominator separately and re-evaluate. Keep these ready: lim(x→0) sinx/x = 1, tanx/x = 1, (1−cosx)/x² = ½, (eˣ−1)/x = 1, ln(1+x)/x = 1, (1+x)^(1/x) → e." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Coordinate Geometry",
  title:"Line conditions you should never re-derive",
  body:"Parallel → m₁ = m₂. Perpendicular → m₁m₂ = −1. Distance from (x₁,y₁) to ax+by+c = 0 is |ax₁+by₁+c|/√(a²+b²). Angle between lines: tanθ = |(m₁−m₂)/(1+m₁m₂)|." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Differentiation",
  title:"Approximation using differentials",
  body:"For a small change, f(x+Δx) ≈ f(x) + f'(x)·Δx. So √(101) ≈ 10 + 1/(2·10) = 10.05, and (1+x)ⁿ ≈ 1 + nx for small x. Handy for numerical MCQs where the options are far apart." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Same tens digit, units adding to 10",
  body:"When two two-digit numbers share a tens digit and their units digits sum to 10, multiply the tens digit by the next integer for the left half and the units digits together for the right half. So 63 × 67 → 6×7 = 42 and 3×7 = 21 → <b>4221</b>; 84 × 86 → 8×9 = 72, 4×6 = 24 → <b>7224</b>. (Squaring numbers ending in 5 is just this rule's special case.)" },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Urdhva Tiryagbhyam — vertical and crosswise",
  body:"Multiply two-digit numbers in one line: units × units gives the last digit, the crosswise products added give the middle, and tens × tens gives the front — carrying as you go. For 12 × 13: 2×3 = 6, (1×3)+(2×1) = 5, 1×1 = 1 → <b>156</b>. It scales to three digits and to polynomial multiplication, which is where it really pays off." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Subtract from a power of ten using complements",
  body:"“All from 9 and the last from 10”: to compute 1000 − 487, take 9−4 = 5, 9−8 = 1, 10−7 = 3 → <b>513</b>. No borrowing anywhere. Handy whenever a problem leaves you subtracting from 100, 1000 or 10000." },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Vedic Maths / Speed Arithmetic",
  title:"Multiplying and dividing by 5, 25 and 50",
  body:"×5 → halve the number and multiply by 10 (48×5 = 24×10 = 480). ×25 → divide by 4, then ×100. ×50 → halve, then ×100. Division reverses it: ÷5 → double and divide by 10. Turns awkward multiplications into halving or doubling, which you can do mentally." },

/* ==================================================================
   MATHS — FORMULA TABLES
   ================================================================== */

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Trigonometry",
  title:"Trigonometric identities",
  rows:[
    ["Pythagorean identities","sin²θ + cos²θ = 1 ; 1 + tan²θ = sec²θ"],
    ["Sum / difference","sin(A±B) = sinA cosB ± cosA sinB"],
    ["Cosine sum","cos(A±B) = cosA cosB ∓ sinA sinB"],
    ["Double angle","sin2θ = 2sinθcosθ ; cos2θ = 2cos²θ − 1"],
    ["Tan double angle","tan2θ = 2tanθ/(1 − tan²θ)"],
    ["Sine rule","a/sinA = b/sinB = c/sinC = 2R"],
    ["Cosine rule","c² = a² + b² − 2ab cosC"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Differentiation",
  title:"Differentiation rules and standard results",
  rows:[
    ["Power rule","d/dx(xⁿ) = nxⁿ⁻¹"],
    ["Product rule","(uv)' = u'v + uv'"],
    ["Quotient rule","(u/v)' = (u'v − uv')/v²"],
    ["Chain rule","dy/dx = dy/du · du/dx"],
    ["Exponential / log","d/dx(eˣ) = eˣ ; d/dx(ln x) = 1/x"],
    ["Trig","sin→cos, cos→−sin, tan→sec²x"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Integration",
  title:"Standard integrals",
  rows:[
    ["Power rule","∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ −1)"],
    ["Reciprocal","∫(1/x)dx = ln|x| + C"],
    ["Exponential","∫eˣdx = eˣ + C"],
    ["Trig","∫sinx dx = −cosx ; ∫cosx dx = sinx"],
    ["Inverse trig form","∫dx/(1+x²) = tan⁻¹x + C"],
    ["Square-root form","∫dx/√(1−x²) = sin⁻¹x + C"],
    ["By parts","∫u dv = uv − ∫v du"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Coordinate Geometry",
  title:"Straight lines and circles",
  rows:[
    ["Distance formula","d = √[(x₂−x₁)² + (y₂−y₁)²]"],
    ["Midpoint","((x₁+x₂)/2, (y₁+y₂)/2)"],
    ["Section formula (internal)","((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))"],
    ["Slope","m = (y₂−y₁)/(x₂−x₁)"],
    ["Point-slope form","y − y₁ = m(x − x₁)"],
    ["Circle","(x−h)² + (y−k)² = r²"],
    ["Area of a triangle","½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Conic Sections",
  title:"Conic sections at a glance",
  rows:[
    ["Parabola","y² = 4ax ; focus (a,0) ; e = 1"],
    ["Ellipse","x²/a² + y²/b² = 1 ; e = √(1 − b²/a²)"],
    ["Hyperbola","x²/a² − y²/b² = 1 ; e = √(1 + b²/a²)"],
    ["Latus rectum (ellipse)","2b²/a"],
    ["Tangent to a circle at (x₁,y₁)","xx₁ + yy₁ = r²"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Vectors & 3D Geometry",
  title:"Vectors and 3D",
  rows:[
    ["Dot product","a·b = |a||b|cosθ = a₁b₁ + a₂b₂ + a₃b₃"],
    ["Cross product magnitude","|a×b| = |a||b|sinθ"],
    ["Perpendicular / parallel test","a·b = 0 ⟂ ; a×b = 0 ∥"],
    ["Scalar triple product","[a b c] = a·(b×c) = volume of parallelepiped"],
    ["Direction cosines","l² + m² + n² = 1"],
    ["Angle between planes","cosθ = |n₁·n₂|/(|n₁||n₂|)"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Sequences & Series",
  title:"Sequences and series",
  rows:[
    ["AP nth term / sum","aₙ = a + (n−1)d ; Sₙ = n/2[2a + (n−1)d]"],
    ["GP nth term / sum","aₙ = arⁿ⁻¹ ; Sₙ = a(rⁿ−1)/(r−1)"],
    ["Infinite GP (|r| < 1)","S = a/(1−r)"],
    ["Sum of first n natural numbers","n(n+1)/2"],
    ["Sum of squares","n(n+1)(2n+1)/6"],
    ["Sum of cubes","[n(n+1)/2]²"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Probability",
  title:"Probability and binomial theorem",
  rows:[
    ["Probability of an event","P(E) = favourable / total outcomes"],
    ["Addition rule","P(A∪B) = P(A) + P(B) − P(A∩B)"],
    ["Conditional probability","P(A|B) = P(A∩B)/P(B)"],
    ["Bayes' theorem","P(A|B) = P(B|A)P(A)/P(B)"],
    ["Binomial general term","T_(r+1) = nCr·aⁿ⁻ʳbʳ"],
    ["Binomial distribution","P(X=r) = nCr pʳq^(n−r) ; mean = np"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"formula", topic:"Foundations (Class 9-10)",
  title:"Class 9-10 algebra and geometry essentials",
  rows:[
    ["Quadratic formula","x = [−b ± √(b²−4ac)]/2a"],
    ["(a+b)² and (a−b)²","a² ± 2ab + b²"],
    ["a² − b²","(a+b)(a−b)"],
    ["(a+b)³","a³ + 3a²b + 3ab² + b³"],
    ["a³ + b³","(a+b)(a² − ab + b²)"],
    ["Heron's formula","√[s(s−a)(s−b)(s−c)], s = (a+b+c)/2"],
    ["Sphere / cylinder volume","(4/3)πr³ ; πr²h"],
  ] },

/* -------------------- MATHS — chapters added later -------------------- */

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Inverse Trigonometry",
  title:"Principal value branches — the ranges you must not guess",
  body:"sin⁻¹ and tan⁻¹ and cosec⁻¹ live in <b>[−π/2, π/2]</b> (tan⁻¹ open, cosec⁻¹ excluding 0). cos⁻¹, cot⁻¹ and sec⁻¹ live in <b>[0, π]</b> (cot⁻¹ open, sec⁻¹ excluding π/2). Hook: “<b>sin-tan-cosec swing either side of zero; cos-cot-sec stay above it.</b>” Getting the branch wrong is the single most common error in this chapter." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Inverse Trigonometry",
  title:"Inverse trigonometric identities",
  rows:[
    ["Complementary pairs","sin⁻¹x + cos⁻¹x = π/2 (also tan/cot, sec/cosec)"],
    ["Sum of arctangents","tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)), xy < 1"],
    ["Double angle","2tan⁻¹x = tan⁻¹(2x/(1−x²))"],
    ["Negative argument","sin⁻¹(−x) = −sin⁻¹x ; cos⁻¹(−x) = π − cos⁻¹x"],
    ["Derivatives","d/dx(sin⁻¹x) = 1/√(1−x²) ; d/dx(tan⁻¹x) = 1/(1+x²)"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Application of Derivatives",
  title:"Second derivative test — smile and frown",
  body:"f″ &gt; 0 means the curve holds water like a <b>smile</b> → <b>minimum</b>. f″ &lt; 0 means it spills like a <b>frown</b> → <b>maximum</b>. If f″ = 0 the test fails and you fall back on the sign change of f′. Always check endpoints too — on a closed interval the extremum is often there rather than at a stationary point." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Application of Derivatives",
  title:"Increasing, decreasing, tangents and normals from one derivative",
  body:"f′ &gt; 0 → increasing, f′ &lt; 0 → decreasing, f′ = 0 → stationary. The slope of the <b>tangent</b> at a point is f′, and the <b>normal</b> is its negative reciprocal −1/f′. For related rates, differentiate the relation with respect to <i>t</i> and substitute — do not solve for the variable first." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Application of Derivatives",
  title:"Applications of differentiation",
  rows:[
    ["Tangent at (x₁,y₁)","y − y₁ = f′(x₁)(x − x₁)"],
    ["Normal at (x₁,y₁)","y − y₁ = −(1/f′(x₁))(x − x₁)"],
    ["Rolle's theorem","f(a)=f(b) ⇒ ∃c with f′(c)=0"],
    ["Lagrange MVT","f′(c) = (f(b)−f(a))/(b−a)"],
    ["Approximation","f(x+Δx) ≈ f(x) + f′(x)Δx"],
    ["Maxima / minima test","f″ < 0 max ; f″ > 0 min"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Differential Equations",
  title:"Name the type before you try to solve it",
  body:"Check in this order: (1) can the variables be <b>separated</b>? (2) is every term the same degree — <b>homogeneous</b>, so substitute y = vx? (3) is it <b>linear</b>, dy/dx + Py = Q, needing the integrating factor <b>IF = e^∫P dx</b>? Nearly every JEE differential equation is one of these three, and naming it does most of the work." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Differential Equations",
  title:"Differential equations",
  rows:[
    ["Order / degree","order = highest derivative ; degree = its power"],
    ["Variable separable","f(y)dy = g(x)dx, then integrate both sides"],
    ["Homogeneous","put y = vx, giving v + x·dv/dx"],
    ["Linear in y","dy/dx + Py = Q ; IF = e^∫P dx"],
    ["Solution of a linear DE","y·(IF) = ∫Q·(IF)dx + C"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Area Under Curves",
  title:"Sketch first, then integrate",
  body:"Area between a curve and the x-axis is ∫|y|dx — the modulus matters, because a region below the axis returns a <i>negative</i> integral that would cancel the part above. Area <b>between two curves</b> is ∫(y_upper − y_lower)dx between their intersection points, so always find the intersections before integrating." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Sets, Relations & Functions",
  title:"De Morgan — the bar flips the sign",
  body:"(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′ — pushing a complement inside <b>swaps union and intersection</b>. Pair it with the counting result n(A∪B) = n(A) + n(B) − n(A∩B), which is the inclusion-exclusion principle in its simplest form." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Sets, Relations & Functions",
  title:"Counting functions and relations by powers",
  body:"From a set A to a set B there are <b>n(B)^n(A)</b> functions and <b>2^(n(A)·n(B))</b> relations. Injective (one-one) functions need n(A) ≤ n(B); surjective (onto) needs n(A) ≥ n(B); a bijection needs them equal. A set with n elements has <b>2ⁿ</b> subsets." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Sets, Relations & Functions",
  title:"Reflexive, symmetric, transitive — test each separately",
  body:"<b>Reflexive</b>: every element relates to itself, (a,a) ∈ R. <b>Symmetric</b>: (a,b) ⇒ (b,a). <b>Transitive</b>: (a,b) and (b,c) ⇒ (a,c). All three together make an <b>equivalence relation</b>. One counter-example is enough to kill any of the three, so hunt for a counter-example before attempting a proof." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Statistics",
  title:"Variance without computing every deviation",
  body:"σ² = <b>Σx²/n − (x̄)²</b> — the mean of the squares minus the square of the mean. Far faster than summing (x − x̄)² term by term. Also remember: adding a constant to every value leaves the variance <b>unchanged</b>, while multiplying every value by k multiplies the variance by <b>k²</b>." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"formula", topic:"Statistics",
  title:"Statistics",
  rows:[
    ["Mean","x̄ = Σxᵢ/n"],
    ["Variance","σ² = Σx²/n − (x̄)²"],
    ["Standard deviation","σ = √(variance)"],
    ["Empirical relation","Mode ≈ 3·Median − 2·Mean"],
    ["Coefficient of variation","(σ/x̄)×100"],
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Limits & Continuity",
  title:"Differentiable ⇒ continuous, never the other way",
  body:"Every differentiable function is continuous, but a continuous function need not be differentiable — <b>|x| at x = 0</b> is the standard counter-example (a sharp corner). So to disprove differentiability, look for corners, cusps and vertical tangents; to disprove continuity, look for jumps and holes." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Sequences & Series",
  title:"Pick terms symmetrically about the middle",
  body:"For three terms in AP take <b>a−d, a, a+d</b>; for four take a−3d, a−d, a+d, a+3d. In GP take <b>a/r, a, ar</b>. The symmetry makes the sum collapse to a single unknown, turning a two-equation problem into a one-line one." },

/* ==================================================================
   BIOLOGY — MNEMONICS
   ================================================================== */

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Taxonomy & Classification",
  title:"“King Philip Came Over For Good Soup” — taxonomic hierarchy",
  body:"<b>K</b>ingdom, <b>P</b>hylum, <b>C</b>lass, <b>O</b>rder, <b>F</b>amily, <b>G</b>enus, <b>S</b>pecies — broadest to most specific. Add Domain at the top (“Dear King Philip…”) for modern three-domain taxonomy." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Cell Biology",
  title:"Krebs cycle intermediates — “Citrate Is Krebs' Starting Substrate For Making Oxaloacetate”",
  body:"Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate — the eight intermediates in order. Each turn yields 3 NADH, 1 FADH₂, 1 GTP/ATP and 2 CO₂." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Cell Cycle & Division",
  title:"Mitosis phases — “PMAT”",
  body:"<b>P</b>rophase, <b>M</b>etaphase, <b>A</b>naphase, <b>T</b>elophase (with cytokinesis following). Hook each to its event: Prophase = chromosomes condense, Metaphase = line up at the <b>M</b>iddle, Anaphase = <b>A</b>part they go, Telophase = <b>T</b>wo nuclei." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Cell Cycle & Division",
  title:"Prophase I substages — “Lazy Zebras Pack Down Dinner”",
  body:"<b>L</b>eptotene, <b>Z</b>ygotene, <b>P</b>achytene, <b>D</b>iplotene, <b>D</b>iakinesis. Key events: synapsis begins in zygotene, crossing over occurs in pachytene, chiasmata become visible in diplotene." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Molecular Basis of Inheritance",
  title:"Base pairing — “Apple in the Tree, Car in the Garage”",
  body:"<b>A</b> pairs with <b>T</b> (two hydrogen bonds), <b>C</b> pairs with <b>G</b> (three hydrogen bonds). More bonds means G-C rich DNA is more stable and needs a higher melting temperature — a favourite reasoning question." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Molecular Basis of Inheritance",
  title:"Purines vs pyrimidines — “PURe As Gold” and “CUT the PYe”",
  body:"<b>Purines</b> (double ring) = <b>A</b>denine and <b>G</b>uanine. <b>Pyrimidines</b> (single ring) = <b>C</b>ytosine, <b>U</b>racil, <b>T</b>hymine. Note uracil replaces thymine in RNA." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biomolecules",
  title:"Essential amino acids — “PVT TIM HALL”",
  body:"<b>P</b>henylalanine, <b>V</b>aline, <b>T</b>hreonine, <b>T</b>ryptophan, <b>I</b>soleucine, <b>M</b>ethionine, <b>H</b>istidine, <b>A</b>rginine, <b>L</b>eucine, <b>L</b>ysine. Nine are strictly essential in adult humans; arginine is semi-essential (essential in children)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Neural Control",
  title:"Cranial nerves — “Oh Oh Oh To Touch And Feel Very Green Vegetables, AH”",
  body:"<b>O</b>lfactory, <b>O</b>ptic, <b>O</b>culomotor, <b>T</b>rochlear, <b>T</b>rigeminal, <b>A</b>bducens, <b>F</b>acial, <b>V</b>estibulocochlear, <b>G</b>lossopharyngeal, <b>V</b>agus, <b>A</b>ccessory, <b>H</b>ypoglossal — nerves I to XII in order. For sensory/motor/both, use “Some Say Marry Money But My Brother Says Big Brains Matter Most.”" },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Chemical Coordination",
  title:"Anterior pituitary hormones — “FLAT PiG”",
  body:"<b>F</b>SH, <b>L</b>H, <b>A</b>CTH, <b>T</b>SH, <b>P</b>rolactin, <b>G</b>H. The posterior pituitary only <i>stores</i> two — oxytocin and ADH (vasopressin) — which are actually made in the hypothalamus." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Plant Physiology",
  title:"Essential macronutrients — “C HOPKNS CaFe Mg”",
  body:"Read as a mock formula: C, H, O, P, K, N, S, Ca, Fe, Mg — the elements plants need in the largest quantity. (“See Hopkins' café, mighty good.”)" },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Plant Kingdom",
  title:"Plant kingdom classification — “Thallophytes Bring Pretty Green Apples”",
  body:"<b>T</b>hallophyta (algae), <b>B</b>ryophyta (mosses — “amphibians of the plant kingdom”), <b>P</b>teridophyta (ferns — first with vascular tissue), <b>G</b>ymnosperms (naked seeds), <b>A</b>ngiosperms (seeds in fruit). Complexity increases along the sequence." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Animal Kingdom",
  title:"Animal phyla in NCERT order",
  body:"<b>P</b>orifera, <b>C</b>oelenterata, <b>C</b>tenophora, <b>P</b>latyhelminthes, <b>A</b>schelminthes, <b>A</b>nnelida, <b>A</b>rthropoda, <b>M</b>ollusca, <b>E</b>chinodermata, <b>H</b>emichordata, <b>C</b>hordata — “Please Come Class, Please Attend All My Extra Hard Classes.” Body-cavity milestone: coelom first appears at Annelida." },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Nutrition & Vitamins",
  title:"Vitamin deficiency diseases",
  body:"A → night blindness; B₁ → beriberi; B₃ → pellagra; B₁₂ → pernicious anaemia; C → scurvy; D → rickets (children) / osteomalacia (adults); E → sterility; K → poor blood clotting. Hook: “<b>A</b> for <b>A</b>ntidote to night blindness, <b>C</b> for s<b>C</b>urvy, <b>D</b> for rickets (<b>D</b>eformed bones), <b>K</b> for <b>K</b>lotting.”" },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Circulation",
  title:"Blood flow through the heart, in order",
  body:"Right atrium → <b>tricuspid</b> valve → right ventricle → pulmonary valve → lungs → left atrium → <b>bicuspid (mitral)</b> valve → left ventricle → aortic valve → aorta. Memory line: “<b>Tri</b> before you <b>Bi</b>” — tricuspid is on the right, bicuspid on the left." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Excretion",
  title:"Nephron parts in order",
  body:"Bowman's capsule → <b>P</b>CT → descending limb → loop of Henle → ascending limb → <b>D</b>CT → collecting duct. Function hook: PCT reabsorbs the most, the loop concentrates urine (counter-current), DCT fine-tunes under ADH and aldosterone." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Digestion",
  title:"Digestive enzymes and what they act on",
  body:"Salivary <b>amylase</b> → starch (mouth, pH neutral). <b>Pepsin</b> → proteins (stomach, needs acid). <b>Trypsin</b>/chymotrypsin → proteins (small intestine, alkaline). <b>Lipase</b> → fats (needs bile first for emulsification). Hook: “-ase tells you the substrate: amyl<b>ase</b> → amylum (starch), lip<b>ase</b> → lipid.”" },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Plant Anatomy",
  title:"Xylem vs phloem — direction of transport",
  body:"<b>Xylem</b> carries water and minerals <b>up</b> only (dead cells, transpiration pull) — “x marks the way up.” <b>Phloem</b> carries <b>food</b> both ways (living cells, translocation) — “phloem = food, flows freely.”" },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Ecology",
  title:"Trophic levels and the 10% law",
  body:"Producers → primary consumers (herbivores) → secondary consumers → tertiary consumers → decomposers. Only about <b>10%</b> of energy passes to the next level, which is why food chains rarely exceed 4-5 links. Number the levels T1-T4 and every pyramid question becomes arithmetic." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Genetics",
  title:"Mendel's laws — segregation vs independent assortment",
  body:"<b>Segregation</b>: the two alleles of <i>one</i> gene separate during gamete formation. <b>Independent assortment</b>: alleles of <i>different</i> genes assort independently (only if unlinked). Hook: “Segregation splits one pair; Assortment mixes different pairs.” Law of dominance explains the 3:1 phenotype." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Health & Disease",
  title:"Vector-borne diseases and their carriers",
  body:"<b>Anopheles</b> → malaria (Plasmodium). <b>Aedes</b> → dengue and chikungunya. <b>Culex</b> → filariasis. <b>Housefly</b> → typhoid, cholera. Hook: “<b>A</b>nopheles for m<b>A</b>laria, <b>A</b>edes for d<b>E</b>ngue, <b>C</b>ulex for filariasis (<b>C</b>logged lymph).”" },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Cell Biology",
  title:"Organelle jobs in one line each",
  body:"Mitochondrion — powerhouse (ATP). Ribosome — protein factory. Rough ER — protein transport; Smooth ER — lipid synthesis. Golgi — packaging and dispatch. Lysosome — “suicide bag” (digestion). Peroxisome — H₂O₂ breakdown. Chloroplast — photosynthesis. Vacuole — storage and turgor." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biomolecules",
  title:"Enzyme classes — “Over The HILL”",
  body:"<b>O</b>xidoreductases (transfer electrons), <b>T</b>ransferases (move a functional group), <b>H</b>ydrolases (split using water), <b>I</b>somerases (rearrange within a molecule), <b>L</b>igases (join, using ATP), <b>L</b>yases (break bonds without water or oxidation). Six classes in the NCERT scheme — the name usually tells you the job." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Circulation",
  title:"WBC abundance — “Never Let Monkeys Eat Bananas”",
  body:"<b>N</b>eutrophils (60-65%) &gt; <b>L</b>ymphocytes (20-25%) &gt; <b>M</b>onocytes (6-8%) &gt; <b>E</b>osinophils (2-3%) &gt; <b>B</b>asophils (0.5-1%). Neutrophils are the most abundant and basophils the rarest — the two ends are what get asked." },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Nutrition & Vitamins",
  title:"B-vitamin chemical names — “The Rhythm Nearly Proved Contagious”",
  body:"B₁ <b>T</b>hiamine, B₂ <b>R</b>iboflavin, B₃ <b>N</b>iacin, B₆ <b>P</b>yridoxine, B₁₂ <b>C</b>obalamin. Pair each with its deficiency: B₁ → beriberi, B₃ → pellagra, B₁₂ → pernicious anaemia." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Cell Cycle & Division",
  title:"Full cell cycle — “IPMAT”",
  body:"<b>I</b>nterphase, <b>P</b>rophase, <b>M</b>etaphase, <b>A</b>naphase, <b>T</b>elophase. Interphase itself splits into G₁ → S (DNA replicates) → G₂ and takes up about <b>95%</b> of the cycle — a favourite MCQ point, since the visually dramatic M phase is the short part." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Evolution",
  title:"Human evolution sequence",
  body:"<b>Dryopithecus → Ramapithecus → Australopithecus → Homo habilis → Homo erectus → Neanderthal → Cro-Magnon → Homo sapiens.</b> Anchor three facts to it: <i>Homo habilis</i> is the first toolmaker, <i>Homo erectus</i> the first to use fire, and Cro-Magnon the first with cave art." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Evolution",
  title:"Horse evolution — “Energy Of Mass Means Potential Energy”",
  body:"<b>E</b>ohippus → <b>M</b>esohippus → <b>M</b>erychippus → <b>P</b>liohippus → <b>E</b>quus. The trend across the series: body size increases, the number of functional toes reduces to one, and the teeth become suited to grazing." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Evolution",
  title:"Hardy-Weinberg — the five conditions that must all hold",
  body:"No <b>m</b>utation, no <b>g</b>ene flow (migration), no <b>g</b>enetic drift (population must be large), <b>r</b>andom mating, and no <b>n</b>atural selection. Allele frequencies stay constant only while all five hold — so any question describing a violation is telling you evolution <i>is</i> occurring." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Evolution",
  title:"Evidence for evolution — “CHAMP”",
  body:"<b>C</b>omparative anatomy, <b>H</b>omologous organs (same origin, different function — divergent evolution), <b>A</b>nalogous organs (different origin, same function — convergent evolution), <b>M</b>olecular evidence, <b>P</b>alaeontology (fossils). Homologous = divergent and analogous = convergent is the pairing that gets tested." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Reproduction",
  title:"Menstrual cycle phases — “Men Prefer Ovulating Secretaries”",
  body:"<b>M</b>enstrual (days 1-5) → <b>P</b>roliferative/follicular (6-13) → <b>O</b>vulatory (~day 14, triggered by the LH surge) → <b>S</b>ecretory/luteal (15-28, corpus luteum secretes progesterone). The LH surge at mid-cycle is the single most asked detail." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Reproduction",
  title:"Spermatogenesis — “Some Grow Powerfully Since Spermiogenesis Starts”",
  body:"<b>S</b>permatogonia (2n) → <b>G</b>rowth → <b>P</b>rimary spermatocyte (2n) → <b>S</b>econdary spermatocyte (n, after meiosis I) → <b>S</b>permatids (n) → spermatozoa. Track the ploidy alongside: it halves at meiosis I, which is where most confusion in this chapter comes from." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Ecology",
  title:"India's biodiversity hotspots — “WISH”",
  body:"<b>W</b>estern Ghats (with Sri Lanka), <b>I</b>ndo-Burma, <b>S</b>undaland (Nicobar Islands), <b>H</b>imalaya. Four of the world's ~34 hotspots reach into India — the number and the names are both commonly asked." },

/* ==================================================================
   BIOLOGY — SHORTCUTS
   ================================================================== */

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"shortcut", topic:"Genetics",
  title:"Standard cross ratios — skip the Punnett grid",
  body:"Recognise the cross and recall the ratio: monohybrid (Aa × Aa) → <b>3:1</b> phenotype, 1:2:1 genotype. Dihybrid (AaBb × AaBb) → <b>9:3:3:1</b>. Test cross (Aa × aa) → <b>1:1</b>. Only draw the 16-box grid when linkage, epistasis or incomplete dominance is involved." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"shortcut", topic:"Genetics",
  title:"Gamete and genotype counting by powers of two",
  body:"An organism heterozygous at n independent loci produces <b>2ⁿ</b> types of gametes, and a self-cross gives <b>3ⁿ</b> genotypes and <b>4ⁿ</b> Punnett boxes. So AaBbCc → 8 gamete types, 27 genotypes — no grid required." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"shortcut", topic:"Genetics",
  title:"Pedigree analysis — four quick rules",
  body:"Trait skips generations → <b>recessive</b>. Appears in every generation → <b>dominant</b>. Affects far more males → <b>X-linked recessive</b>. Affected fathers pass it to <i>all</i> daughters and no sons → <b>X-linked dominant</b>. Affects both sexes equally, unaffected parents have affected child → autosomal recessive." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"shortcut", topic:"Cell Biology",
  title:"Identify a tissue from shape plus function",
  body:"<b>Squamous</b> = flat and thin, where diffusion happens (alveoli, capillaries). <b>Cuboidal</b> = cube-shaped, where secretion/absorption happens (kidney tubules, glands). <b>Columnar</b> = tall, where absorption plus protection is needed (gut lining). Match shape to job rather than memorising lists." },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"shortcut", topic:"Plant Anatomy",
  title:"Monocot vs dicot at a glance",
  body:"Monocot: one cotyledon, <b>parallel</b> venation, fibrous roots, scattered vascular bundles, floral parts in threes. Dicot: two cotyledons, <b>reticulate</b> venation, tap root, ring-arranged bundles, floral parts in fours or fives. Leaf venation alone settles most identification questions." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"shortcut", topic:"Evolution",
  title:"Hardy-Weinberg in practice",
  body:"With p + q = 1 and p² + 2pq + q² = 1, the recessive <i>phenotype</i> frequency gives q² directly — take its square root for q, subtract from 1 for p, and carriers are 2pq. Any deviation from equilibrium implies mutation, migration, drift, non-random mating or selection." },

/* ==================================================================
   BIOLOGY — FORMULA / REFERENCE TABLES
   ================================================================== */

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Genetics",
  title:"Genetics ratios and rules",
  rows:[
    ["Monohybrid phenotypic / genotypic ratio","3:1 / 1:2:1"],
    ["Dihybrid phenotypic ratio","9:3:3:1"],
    ["Test cross (heterozygote × recessive)","1:1"],
    ["Incomplete dominance","1:2:1 (phenotype = genotype)"],
    ["Gamete types from n heterozygous loci","2ⁿ"],
    ["Hardy-Weinberg","p² + 2pq + q² = 1 ; p + q = 1"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Chemical Coordination",
  title:"Hormones — source and action",
  rows:[
    ["Insulin","pancreatic β-cells — lowers blood glucose"],
    ["Glucagon","pancreatic α-cells — raises blood glucose"],
    ["Thyroxine (T₄)","thyroid — sets basal metabolic rate"],
    ["Adrenaline","adrenal medulla — fight-or-flight response"],
    ["Cortisol","adrenal cortex — stress and glucose metabolism"],
    ["ADH (vasopressin)","posterior pituitary — water reabsorption"],
    ["Oxytocin","posterior pituitary — uterine contraction, milk ejection"],
    ["GH","anterior pituitary — growth; excess → gigantism/acromegaly"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Cell Biology",
  title:"Respiration and photosynthesis at a glance",
  rows:[
    ["Photosynthesis","6CO₂ + 12H₂O + light → C₆H₁₂O₆ + 6O₂ + 6H₂O"],
    ["Aerobic respiration","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy"],
    ["Glycolysis (cytoplasm)","net 2 ATP + 2 NADH per glucose"],
    ["Krebs cycle (per turn)","3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂"],
    ["Total ATP per glucose (aerobic)","≈ 36-38 ATP"],
    ["Fermentation (anaerobic)","2 ATP only → lactic acid or ethanol + CO₂"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Ecology",
  title:"Population and ecosystem formulas",
  rows:[
    ["Exponential growth","dN/dt = rN → N_t = N₀e^(rt)"],
    ["Logistic growth","dN/dt = rN(K−N)/K (sigmoid curve)"],
    ["Population density change","N_t = N₀ + (B + I) − (D + E)"],
    ["Ten percent law","~10% energy transfer per trophic level"],
    ["Gross vs net primary productivity","NPP = GPP − respiration"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Human Circulation",
  title:"Human physiology reference values",
  rows:[
    ["Body temperature","≈ 37 °C (98.6 °F)"],
    ["Resting heart rate","≈ 72 beats/min"],
    ["Cardiac output","stroke volume × heart rate ≈ 5 L/min"],
    ["Blood pressure (normal)","120/80 mm Hg"],
    ["Blood volume in an adult","≈ 5 L"],
    ["Haemoglobin (men / women)","12-16 g/dL"],
    ["Glomerular filtration rate","≈ 125 mL/min (180 L/day)"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Human Health & Disease",
  title:"Blood groups and transfusion",
  rows:[
    ["Group A","antigen A, antibody anti-B"],
    ["Group B","antigen B, antibody anti-A"],
    ["Group AB","both antigens, no antibodies — universal recipient"],
    ["Group O","no antigens, both antibodies — universal donor"],
    ["Rh factor","Rh⁻ mother + Rh⁺ fetus → erythroblastosis fetalis risk"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"formula", topic:"Cell Biology",
  title:"Class 9-10 biology essentials",
  rows:[
    ["Cell theory","all organisms are made of cells; cell is the basic unit of life"],
    ["Plant vs animal cell","plant: cell wall, chloroplast, large vacuole"],
    ["Photosynthesis (summary)","6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂"],
    ["Respiration (summary)","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy"],
    ["Human chromosome number","46 (23 pairs); gametes have 23"],
    ["Bones in an adult human","206"],
  ] },

/* ------------------- BIOLOGY — chapters added later ------------------- */

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Photosynthesis",
  title:"Photosystem II acts before Photosystem I",
  body:"The numbering runs <i>backwards</i> relative to the electron path: <b>PS II (P680) comes first</b>, splits water and releases O₂, then passes electrons down to <b>PS I (P700)</b>, which reduces NADP⁺. Remember “<b>II before I</b>, 680 before 700” — and that the oxygen we breathe comes from <b>water</b>, not CO₂." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Photosynthesis",
  title:"C4 plants — Kranz, PEP and no photorespiration",
  body:"C4 plants (maize, sugarcane, sorghum) have <b>Kranz anatomy</b> (bundle-sheath cells), fix CO₂ first with <b>PEP carboxylase</b> into a 4-carbon acid (OAA), and show <b>no photorespiration</b> because CO₂ is concentrated around RuBisCO. They therefore tolerate heat and drought better than C3 plants — the comparison NEET asks every year." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Photosynthesis",
  title:"Photosynthesis quick reference",
  rows:[
    ["Light reaction site","thylakoid membrane (grana)"],
    ["Dark reaction site","stroma (Calvin cycle)"],
    ["Source of released O₂","photolysis of water"],
    ["C3 first stable product","3-PGA (3 carbon)"],
    ["C4 first stable product","oxaloacetic acid (4 carbon)"],
    ["Primary CO₂ acceptor — C3 / C4","RuBP / PEP"],
    ["ATP & NADPH per CO₂ (Calvin)","3 ATP + 2 NADPH"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Respiration in Plants",
  title:"Where each stage of respiration happens",
  body:"<b>Glycolysis</b> — cytoplasm (and it is the only stage common to aerobic and anaerobic respiration). <b>Krebs cycle</b> — mitochondrial matrix. <b>Electron transport chain</b> — inner mitochondrial membrane. Hook: “<b>cytoplasm, matrix, membrane</b>”, moving steadily inward as more ATP is produced." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Respiration in Plants",
  title:"Respiratory quotient tells you the substrate",
  body:"RQ = CO₂ released / O₂ consumed. <b>Carbohydrates = 1</b>, <b>fats ≈ 0.7</b>, <b>proteins ≈ 0.9</b>, and organic acids &gt; 1. Fats need extra oxygen because they are more reduced, which is why their RQ falls below one." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Plant Growth & Development",
  title:"Growth promoters versus inhibitors — three against two",
  body:"The five plant hormones split cleanly: <b>three promoters</b> (auxin, gibberellin, cytokinin) against <b>two inhibitors</b> (abscisic acid, ethylene). Two exam-friendly oddities sit in the second group — ABA is the “<b>stress hormone</b>” and the antagonist of gibberellin, and ethylene is the only <b>gaseous</b> hormone." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Plant Growth & Development",
  title:"Plant hormones at a glance",
  rows:[
    ["Auxin (IAA)","apical dominance, rooting, phototropism"],
    ["Gibberellin (GA₃)","stem elongation, bolting, seed germination"],
    ["Cytokinin","cell division, delays senescence (Richmond-Lang effect)"],
    ["Abscisic acid","stress hormone — closes stomata, seed dormancy"],
    ["Ethylene","fruit ripening, abscission (the only gaseous hormone)"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Breathing & Respiration",
  title:"Every lung capacity is a sum of volumes",
  body:"There are only four <i>volumes</i> (TV, IRV, ERV, RV) — every <i>capacity</i> is just some of them added together. <b>Vital capacity = TV + IRV + ERV</b>; <b>Total lung capacity = VC + RV</b>. The one fact that makes it stick: <b>residual volume can never be breathed out</b>, which is precisely why VC is always smaller than TLC." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Breathing & Respiration",
  title:"How each gas actually travels",
  body:"<b>O₂</b> — about 97% carried by haemoglobin as oxyhaemoglobin, only 3% dissolved. <b>CO₂</b> — about 70% as bicarbonate, 20-25% as carbamino-haemoglobin, 7% dissolved. So oxygen rides the protein and carbon dioxide rides the plasma as HCO₃⁻; the <b>Bohr effect</b> (more CO₂, lower pH) makes haemoglobin release O₂ where tissues need it." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Breathing & Respiration",
  title:"Respiratory volumes and transport",
  rows:[
    ["Tidal volume (TV)","~500 mL"],
    ["Inspiratory reserve (IRV)","2500-3000 mL"],
    ["Expiratory reserve (ERV)","1000-1100 mL"],
    ["Residual volume (RV)","1100-1200 mL"],
    ["Vital capacity","TV + IRV + ERV"],
    ["Total lung capacity","VC + RV (~5-6 L)"],
    ["O₂ transport","~97% as oxyhaemoglobin"],
    ["CO₂ transport","~70% as bicarbonate"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Locomotion & Movement",
  title:"Sliding filament — the A band never changes",
  body:"During contraction the <b>I band and H zone shorten</b> while the <b>A band stays the same width</b>, because the filaments slide past each other rather than shortening themselves. Hook: “<b>A</b> for <b>A</b>lways the same.” The sarcomere shortens as the Z lines are pulled together." },

{ exam:["NEET"], subject:"Biology", cls:"9-10", type:"mnemonic", topic:"Locomotion & Movement",
  title:"206 bones — 80 axial and 126 appendicular",
  body:"<b>Axial (80)</b>: skull 22, ear ossicles 6, hyoid 1, vertebrae 26, ribs 24, sternum 1. <b>Appendicular (126)</b>: the limbs and their girdles. Check: 80 + 126 = 206. Also note the three muscle types — <b>skeletal</b> (striated, voluntary), <b>cardiac</b> (striated, involuntary) and <b>smooth</b> (unstriated, involuntary)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biotechnology",
  title:"The three tools of genetic engineering",
  body:"<b>Restriction enzymes</b> are the molecular <i>scissors</i> (they cut palindromic sequences into sticky ends), <b>DNA ligase</b> is the <i>glue</i>, and a <b>vector</b> (plasmid, phage) is the <i>vehicle</i> that carries the gene into the host. Scissors, glue, vehicle — that is the whole recombinant DNA toolkit." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biotechnology",
  title:"Reading an enzyme name like EcoRI",
  body:"<b>E</b> = genus <i>Escherichia</i>, <b>co</b> = species <i>coli</i>, <b>R</b> = strain RY13, <b>I</b> = the first enzyme isolated from it (Roman numeral). Every restriction enzyme is named this way, so the name itself tells you the source organism — a favourite one-mark question." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Biotechnology",
  title:"Biotechnology tools and products",
  rows:[
    ["Restriction endonuclease","cuts DNA at palindromic sites → sticky ends"],
    ["DNA ligase","joins DNA fragments"],
    ["Vectors","plasmid (pBR322), bacteriophage, Ti plasmid, BAC/YAC"],
    ["Gel electrophoresis","separates DNA by size; smaller travels farther"],
    ["PCR","denaturation → annealing → extension (Taq polymerase)"],
    ["Bt cotton","cry genes from Bacillus thuringiensis"],
    ["RNA interference","silences a gene using dsRNA (used against nematodes)"],
    ["Human insulin (Humulin)","A and B chains made in E. coli, then joined"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Microbes in Human Welfare",
  title:"Which microbe makes what",
  rows:[
    ["Curd","Lactobacillus (lactic acid bacteria)"],
    ["Bread, beer, wine","Saccharomyces cerevisiae (brewer's yeast)"],
    ["Swiss cheese holes","Propionibacterium sharmanii (CO₂)"],
    ["Roquefort cheese","Penicillium roqueforti"],
    ["Penicillin","Penicillium notatum / chrysogenum"],
    ["Statins (cholesterol)","Monascus purpureus"],
    ["Cyclosporin A (immunosuppressant)","Trichoderma polysporum"],
    ["Biogas","methanogens, e.g. Methanobacterium"],
    ["Biofertiliser","Rhizobium, Azotobacter, mycorrhiza, Anabaena"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Ecosystem & Biodiversity",
  title:"Which ecological pyramid can be inverted",
  body:"The pyramid of <b>energy is always upright</b> — energy is lost at every transfer, so it cannot invert. The pyramid of <b>number</b> can invert (one large tree supporting many insects) and so can the pyramid of <b>biomass</b> (in a sea, the small standing crop of phytoplankton supports a larger mass of zooplankton). Only energy is guaranteed." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Morphology of Plants",
  title:"Placentation — “MAP-BF”",
  body:"<b>M</b>arginal (pea), <b>A</b>xile (china rose, tomato, lemon), <b>P</b>arietal (mustard, Argemone), <b>B</b>asal (sunflower, marigold), <b>F</b>ree central (Dianthus, Primrose). Axile means a central axis in a multi-chambered ovary; parietal means ovules on the wall of a one-chambered ovary." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Morphology of Plants",
  title:"Aestivation — four ways petals sit in a bud",
  body:"<b>Valvate</b> (edges just touching — Calotropis), <b>twisted</b> (one edge overlaps the next — china rose, cotton), <b>imbricate</b> (overlapping irregularly — Cassia, gulmohar), <b>vexillary</b> (the large standard petal covering the rest — pea, bean). Vexillary is the giveaway for the pea family." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Excretion",
  title:"Ammonotelic, ureotelic, uricotelic — how much water can you spare?",
  body:"<b>Ammonotelic</b> — bony fish and aquatic amphibians excrete ammonia (most toxic, needs the most water, but water is free). <b>Ureotelic</b> — mammals and adult amphibians excrete urea. <b>Uricotelic</b> — birds, reptiles and insects excrete uric acid (least toxic, almost no water lost, and lightest for flight)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Health & Disease",
  title:"Active vs passive, innate vs acquired immunity",
  body:"<b>Active</b> immunity — your own body makes the antibodies (infection or vaccination); slow to develop but long lasting. <b>Passive</b> — ready-made antibodies are given (mother's milk, antivenom); instant but temporary. Separately, <b>innate</b> immunity is non-specific and present from birth, while <b>acquired</b> is specific and has memory." },

];
