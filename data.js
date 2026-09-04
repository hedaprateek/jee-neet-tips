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

/* --------- PHYSICS — unorthodox hooks, chapter by chapter (11-12) --------- */

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Mechanical Properties of Solids",
  title:"Steel is <i>more</i> elastic than rubber — the definition is backwards from daily speech",
  body:"In physics “elastic” means how strongly a body <b>snaps back</b>, not how far it stretches. Steel has a far larger Young's modulus, so it resists deformation and recovers harder — it is the more elastic material. Rubber stretches more, which is exactly why it is <i>less</i> elastic. Almost every exam question on this word is testing the everyday misunderstanding." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"formula", topic:"Mechanical Properties of Solids",
  title:"Elasticity",
  rows:[
    ["Stress / strain","stress = F/A ; strain = Δl/l"],
    ["Young's modulus","Y = (F·l)/(A·Δl)"],
    ["Bulk modulus","B = −P/(ΔV/V)"],
    ["Compressibility","1/B"],
    ["Poisson's ratio","σ = lateral strain / longitudinal strain (0 to 0.5)"],
    ["Elastic potential energy","U = ½ × stress × strain × volume"],
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Magnetism & Matter",
  title:"Dia, para, ferro — just count unpaired electrons",
  body:"<b>Dia</b>magnetic: <i>no</i> unpaired electrons, weakly <b>repelled</b> (“<b>Dia</b> = <b>D</b>enies the field”). <b>Para</b>magnetic: some unpaired electrons, weakly attracted. <b>Ferro</b>magnetic: many aligned unpaired electrons in domains, strongly attracted and it stays magnetised. Work out the electron configuration and the class follows without memorising lists." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Modern Physics",
  title:"Bohr's orbit powers: 2, −1, −2, 3",
  body:"Everything in the hydrogen atom is a power of n: radius <b>rₙ ∝ n²</b>, speed <b>vₙ ∝ 1/n</b>, energy <b>Eₙ ∝ −1/n²</b>, time period <b>Tₙ ∝ n³</b>. Memorise the sequence “<b>2, −1, −2, 3</b>” and you can answer any “what happens when the electron jumps to n = 3” question by ratio alone." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Modern Physics",
  title:"Photoelectric effect — more bullets versus faster bullets",
  body:"<b>Intensity</b> controls how <i>many</i> photons arrive, so it changes the <b>number</b> of photoelectrons (the current) — never their energy. <b>Frequency</b> controls how <i>hard</i> each photon hits, so it changes the <b>maximum kinetic energy</b> — never the count. Brighter light means more bullets; bluer light means faster bullets." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Gravitation",
  title:"g is maximum at the surface — it falls off in <i>both</i> directions",
  body:"Go up and g drops as 1/(R+h)²; go <i>down</i> and it drops too, linearly, reaching <b>zero at the centre</b> of the Earth. So the surface is the maximum, not the starting point of a one-way decline — the standard trap in this chapter. Also: a satellite is weightless because it is in free fall, not because gravity is absent." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Current Electricity",
  title:"Sanity-check any parallel combination",
  body:"The equivalent resistance of a parallel network is <b>always smaller than the smallest branch</b> — if your answer is larger, you have used the series formula. Conversely a series total is always larger than the largest resistor. Two equal resistors R in parallel give exactly R/2; n equal ones give R/n." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"SHM & Waves",
  title:"Sound is fastest in solids — the opposite of light",
  body:"Sound needs a medium and travels <b>solid &gt; liquid &gt; gas</b> (tighter bonds pass the disturbance faster), while light is <b>fastest in vacuum</b> and slows in denser media. The two behave in opposite directions, which is why questions pair them. Sound cannot travel through vacuum at all." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"SHM & Waves",
  title:"Beats: you hear the difference, not the average",
  body:"Two close frequencies produce beats at <b>|f₁ − f₂|</b> per second — the <i>difference</i>. Loading a tuning fork with wax <b>lowers</b> its frequency, and that is the standard way questions ask you to decide which fork was which: see whether the beat count rises or falls after loading." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Optics",
  title:"Blue sky and red sunset are the same law, seen from two angles",
  body:"Rayleigh scattering goes as <b>1/λ⁴</b>, so blue scatters roughly 16 times more than red. Looking <i>away</i> from the sun you see the scattered blue — a blue sky. Looking <i>through</i> a long slanted path at sunset, the blue has all been scattered out and only red survives. One formula, two everyday facts." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Optics",
  title:"Rainbow angles: 42 and 51, with the colours flipped",
  body:"The <b>primary</b> rainbow sits at about <b>42°</b> (one internal reflection) with <b>red on the outside</b>. The <b>secondary</b> sits at about <b>51°</b> (two internal reflections), is fainter, and has its colours <b>reversed</b> — red on the inside. Each extra reflection costs brightness and flips the order." },

{ exam:["JEE"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Electrostatics",
  title:"Dielectric inserted: ask “battery connected or disconnected?” first",
  body:"This one question decides everything. <b>Battery still connected</b> → V is fixed, so C rises by K, and Q and energy rise by K. <b>Battery disconnected</b> → Q is fixed, so C rises by K while V and energy <b>fall</b> by K. Students who skip this step get exactly half of these questions wrong." },

{ exam:["JEE"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Alternating Current",
  title:"At resonance the voltage across L or C can exceed the supply",
  body:"It looks impossible, but V_L and V_C are individually <b>Q times the source voltage</b> and merely cancel each other because they are 180° out of phase. So a 10 V supply can put hundreds of volts across the inductor. Kirchhoff is not violated — the two large voltages sum to zero." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Units & Measurement",
  title:"Anything inside sin, log or an exponent must be dimensionless",
  body:"You can never take the logarithm of a length or the sine of a time. So in any expression like e^(−kt) or sin(ωt), the whole argument must cancel to a pure number — which instantly gives you the dimensions of k or ω without any other reasoning. A fast way to find an unknown constant's units." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"mnemonic", topic:"Work, Energy & Power",
  title:"The “one-half club”",
  body:"A ½ appears wherever energy is quadratic in its variable: KE = <b>½</b>mv², spring PE = <b>½</b>kx², capacitor energy = <b>½</b>CV², inductor energy = <b>½</b>LI², and SHM energy = <b>½</b>mω²A². If you write one of these without the ½, the pattern will catch you." },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"shortcut", topic:"Fluid Mechanics",
  title:"In a fluid, the heavier ball really does fall faster",
  body:"In vacuum every body falls at the same rate, but terminal velocity goes as <b>r²(ρ − σ)</b>, so a denser or larger sphere settles faster in a liquid. This is why the vacuum result and the fluid result feel contradictory — they are different regimes, and questions deliberately blur them." },

/* ======================= PHYSICS — PROOFS ======================= */

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Kinematics",
  title:"The three equations of motion, by calculus",
  claim:"For constant acceleration a: v = u + at, s = ut + ½at², v² = u² + 2as.",
  steps:[
    "By definition a = dv/dt. Separate and integrate from u to v as t goes 0 to t: ∫dv = a∫dt.",
    "This gives v − u = at, that is <b>v = u + at</b>.",
    "Now use v = ds/dt and substitute: ds/dt = u + at, so ∫ds = ∫(u + at)dt.",
    "Integrating from 0 to t gives <b>s = ut + ½at²</b>.",
    "For the third, write a = dv/dt = (dv/ds)(ds/dt) = v·dv/ds, so v dv = a ds.",
    "Integrate: ∫v dv from u to v equals a∫ds from 0 to s, giving (v² − u²)/2 = as.",
    "Therefore <b>v² = u² + 2as</b> — the equation with no time in it."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Kinematics",
  title:"Projectile range, and why 45° is optimal",
  claim:"R = u²sin2θ / g, maximised at θ = 45°.",
  steps:[
    "Resolve the launch velocity: horizontal u cosθ (constant), vertical u sinθ (decelerating at g).",
    "Vertically the projectile returns to its starting height, so 0 = u sinθ·T − ½gT².",
    "Solving for the non-zero root gives time of flight T = 2u sinθ / g.",
    "Horizontally there is no acceleration, so R = (u cosθ)·T.",
    "Substitute T: R = 2u² sinθ cosθ / g = <b>u² sin2θ / g</b>.",
    "R is largest when sin2θ = 1, that is 2θ = 90°, so <b>θ = 45°</b>. Since sin2θ = sin(180° − 2θ), complementary angles such as 30° and 60° give the same range."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Work, Energy & Power",
  title:"The work-energy theorem",
  claim:"Net work done equals the change in kinetic energy.",
  steps:[
    "Work done by a net force along a path is W = ∫F ds.",
    "Substitute Newton's second law, F = ma = m(dv/dt).",
    "Rewrite using the chain rule: m(dv/dt)ds = m·v·dv, since ds/dt = v.",
    "So W = ∫m v dv, integrated from the initial speed u to the final speed v.",
    "Evaluating gives W = ½mv² − ½mu².",
    "Therefore <b>W_net = ΔKE</b> — which is why energy methods bypass time entirely."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Gravitation",
  title:"Escape velocity",
  claim:"v_e = √(2GM/R), independent of the projectile's mass.",
  steps:[
    "To just escape, the body must reach infinity with zero kinetic energy left.",
    "Gravitational potential energy at the surface is U = −GMm/R, and at infinity it is zero.",
    "By conservation of energy: ½mv_e² + (−GMm/R) = 0 + 0.",
    "So ½mv_e² = GMm/R — and the projectile's mass m cancels from both sides.",
    "Therefore <b>v_e = √(2GM/R)</b>, about 11.2 km/s for Earth.",
    "Since orbital velocity is √(GM/R), it follows that <b>v_e = √2 · v_orbital</b>."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Gravitation",
  title:"Kepler's third law from a circular orbit",
  claim:"T² ∝ r³.",
  steps:[
    "For a circular orbit, gravity supplies the centripetal force: GMm/r² = mv²/r.",
    "Cancel m and one r: v² = GM/r.",
    "The orbital period satisfies v = 2πr/T, so v² = 4π²r²/T².",
    "Equate the two expressions: 4π²r²/T² = GM/r.",
    "Rearrange: T² = (4π²/GM)·r³.",
    "Since 4π²/GM is the same for every satellite of that body, <b>T² ∝ r³</b>."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"SHM & Waves",
  title:"Time period of a simple pendulum",
  claim:"T = 2π√(L/g), valid only for small oscillations.",
  steps:[
    "Displace the bob by a small angle θ. The restoring force along the arc is F = −mg sinθ.",
    "For small θ in radians, sin θ ≈ θ — this approximation is the whole reason the result needs small amplitude.",
    "The arc displacement is x = Lθ, so θ = x/L and F ≈ −mg x/L.",
    "This has the form F = −kx with k = mg/L, so the motion is simple harmonic.",
    "For SHM, T = 2π√(m/k) = 2π√(mL/mg).",
    "Therefore <b>T = 2π√(L/g)</b> — independent of the mass of the bob and of the amplitude."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Electrostatics",
  title:"Energy stored in a capacitor",
  claim:"U = ½CV² — and where the one-half comes from.",
  steps:[
    "Charging is not instantaneous: to move a further charge dq when the plates already hold q, the work is dW = V dq = (q/C)dq.",
    "Integrate as the charge builds from 0 to its final value Q: W = ∫₀^Q (q/C)dq.",
    "This gives W = Q²/2C.",
    "Substituting Q = CV yields <b>U = ½CV² = ½QV = Q²/2C</b>. The ½ appears because the voltage <i>grows</i> from 0 to V during charging — the average is V/2, not V. This is also why half the battery's energy is always lost as heat when charging a capacitor."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Current Electricity",
  title:"Resistors in series and in parallel",
  claim:"R_s = R₁ + R₂ and 1/R_p = 1/R₁ + 1/R₂.",
  steps:[
    "<b>Series:</b> the same current I passes through both, and the potential drops add: V = V₁ + V₂.",
    "So IR_s = IR₁ + IR₂, and cancelling I gives <b>R_s = R₁ + R₂</b>.",
    "<b>Parallel:</b> the same voltage V is across both, and the currents add: I = I₁ + I₂.",
    "So V/R_p = V/R₁ + V/R₂, and cancelling V gives <b>1/R_p = 1/R₁ + 1/R₂</b>. The two derivations differ only in which quantity is shared — current in series, voltage in parallel."
  ] },

{ exam:["JEE"], subject:"Physics", cls:"11-12", type:"proof", topic:"Current Electricity",
  title:"The Wheatstone bridge balance condition",
  claim:"The bridge is balanced when P/Q = R/S.",
  steps:[
    "Balance means no current flows through the galvanometer, so B and D are at the same potential.",
    "With no current in the middle branch, the same current I₁ flows through P and Q, and I₂ through R and S.",
    "Equal potentials at B and D require the drop across P to equal the drop across R: I₁P = I₂R.",
    "Likewise the drops across Q and S are equal: I₁Q = I₂S.",
    "Divide the first equation by the second: P/Q = R/S.",
    "Therefore at balance <b>P/Q = R/S</b>, and the galvanometer branch may be removed entirely."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Magnetism & EMI",
  title:"Motional EMF: ε = BLv",
  claim:"Derived twice — from the Lorentz force and from Faraday's law.",
  steps:[
    "<b>Force route:</b> a free charge q in the rod moves with velocity v through field B, feeling a force qvB along the rod.",
    "Charges pile up at the ends until the electric force qE balances it: E = vB.",
    "The EMF is the field times the length: ε = EL = <b>BLv</b>.",
    "<b>Flux route:</b> in time dt the rod sweeps out area dA = Lv dt, so the flux change is dΦ = B·Lv dt.",
    "Faraday's law gives ε = dΦ/dt = <b>BLv</b> — the two routes agree, which is the point of the exercise."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Wave Optics",
  title:"Fringe width in Young's double slit experiment",
  claim:"β = λD/d.",
  steps:[
    "For a point P at distance y from the centre of the screen, the path difference is approximately Δ = yd/D (valid when D ≫ d).",
    "Bright fringes need Δ = nλ, so yₙ = nλD/d.",
    "The next bright fringe is at y_(n+1) = (n+1)λD/d.",
    "Fringe width is the gap between consecutive bright fringes: β = y_(n+1) − yₙ.",
    "Therefore <b>β = λD/d</b>, the same spacing for dark fringes — which is why the pattern is evenly spaced."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Modern Physics",
  title:"Bohr's radius for the hydrogen atom",
  claim:"rₙ = n²h²ε₀/πme², giving 0.529 Å for n = 1.",
  steps:[
    "The electrostatic attraction supplies the centripetal force: ke²/r² = mv²/r, so mv² = ke²/r.",
    "Bohr's quantisation postulate fixes the angular momentum: mvr = nh/2π.",
    "Square the second equation: m²v²r² = n²h²/4π².",
    "Substitute mv² = ke²/r into it: m(ke²/r)r² = n²h²/4π², that is mke²r = n²h²/4π².",
    "Solve for r: <b>rₙ = n²h²/(4π²mke²)</b>, which is proportional to n².",
    "Putting in the constants gives r₁ = <b>0.529 Å</b>, and the same substitution back into the energy expression gives Eₙ = −13.6/n² eV."
  ] },

{ exam:["JEE","NEET"], subject:"Physics", cls:"11-12", type:"proof", topic:"Kinetic Theory & Gases",
  title:"Kinetic theory: P = ⅓ρv²_rms",
  claim:"Pressure of an ideal gas from molecular collisions.",
  steps:[
    "Consider one molecule of mass m in a cube of side L, moving along x with speed vₓ.",
    "Each collision with a wall reverses its momentum, a change of 2mvₓ.",
    "It returns to the same wall every 2L/vₓ seconds, so the average force it exerts is 2mvₓ ÷ (2L/vₓ) = mvₓ²/L.",
    "Pressure from N molecules is the total force over area L²: P = Nm⟨vₓ²⟩/L³.",
    "Motion is isotropic, so ⟨vₓ²⟩ = ⟨v²⟩/3.",
    "With density ρ = Nm/L³, this gives <b>P = ⅓ρv²_rms</b> — and comparing with PV = nRT yields v_rms = √(3RT/M)."
  ] },

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

/* -------- CHEMISTRY — unorthodox hooks, chapter by chapter (11-12) -------- */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Atomic Structure",
  title:"The (n + l) rule is the real law behind the diagonal arrow",
  body:"Orbitals fill in order of increasing <b>(n + l)</b>; when two tie, the one with the <b>lower n</b> fills first. Check 4s (4+0 = 4) against 3d (3+2 = 5) — 4s wins, which is the whole reason the d-block starts where it does. Learn the rule and you never need to redraw the diagonal chart." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Two ionisation-energy anomalies: Be &gt; B and N &gt; O",
  body:"Ionisation energy rises across a period, but it <i>dips</i> twice. <b>Be &gt; B</b> because boron's electron leaves a higher-energy p orbital. <b>N &gt; O</b> because nitrogen is exactly half-filled (2p³) and oxygen must pay to remove an electron from a <i>paired</i> orbital. Same two reasons repeat in period 3 (Mg &gt; Al, P &gt; S)." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Chlorine beats fluorine on electron gain enthalpy",
  body:"Fluorine <i>should</i> win by the trend, but it does not: <b>Cl (−349) is more negative than F (−328 kJ/mol)</b>. Fluorine's 2p shell is so small that the incoming electron meets heavy repulsion. The same small-size effect makes O less negative than S. Whenever a period-2 element breaks a trend, crowding is usually why." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Gallium is <i>smaller</i> than aluminium",
  body:"Going down group 13 the size should grow, but Ga (135 pm) is smaller than Al (143 pm) — ten poorly shielding 3d electrons sit in between and pull the outer shell in. The same effect makes <b>Zr and Hf almost identical in size</b> (lanthanoid contraction), which is why those two are so hard to separate chemically." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Periodic Table",
  title:"Diagonal relationships — Li-Mg, Be-Al, B-Si",
  body:"The first element of a group often resembles the <i>second</i> element of the next group more than its own family, because size and charge density happen to match on the diagonal. So <b>Li behaves like Mg</b>, <b>Be like Al</b>, and <b>B like Si</b>. Any “which pair shows a diagonal relationship” question is answered by this trio." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"s-Block & p-Block",
  title:"Inert pair effect — heavy elements hoard their s electrons",
  body:"Down groups 13-15, the outer <b>ns² pair becomes reluctant to bond</b>, so the <i>lower</i> oxidation state grows more stable: Tl⁺ &gt; Tl³⁺, <b>Pb²⁺ &gt; Pb⁴⁺</b>, Bi³⁺ &gt; Bi⁵⁺. That is why PbO₂ and BiF₅ are strong oxidising agents — they are desperate to drop back down." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Chemical Bonding",
  title:"Bond angles shrink as lone pairs pile on: 109.5 → 107 → 104.5",
  body:"All three are sp³, and each lone pair squeezes the bond angle further: <b>CH₄ 109.5°</b> (no lone pair), <b>NH₃ 107°</b> (one), <b>H₂O 104.5°</b> (two). Counting lone pairs predicts the whole sequence — you never need to memorise the individual numbers." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Chemical Bonding",
  title:"Hydrogen bonding explains ice floating and NH₃ boiling high",
  body:"Only <b>N, O and F</b> are small and electronegative enough to hydrogen bond. Two consequences worth carrying: <b>ice is less dense than water</b> (H-bonds hold an open cage, so it floats), and <b>NH₃ boils above PH₃</b> despite being lighter. Whenever a boiling point breaks the molecular-mass trend, suspect H-bonding." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Chemical Bonding",
  title:"Ortho-nitrophenol is steam volatile, para is not",
  body:"The <i>ortho</i> isomer folds its OH onto the neighbouring NO₂ and hydrogen bonds to <b>itself</b> (intramolecular), so its molecules barely stick together and it distils over in steam. The <i>para</i> isomer bonds to its <b>neighbours</b> (intermolecular), giving a much higher boiling point. Same formula, opposite behaviour — a favourite comparison." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Thermodynamics",
  title:"Exothermic does not mean spontaneous",
  body:"Only <b>ΔG</b> decides spontaneity, never ΔH alone — melting ice is endothermic yet spontaneous above 0 °C because TΔS wins. Read the sign pair: ΔH negative with ΔS positive is spontaneous at <i>all</i> temperatures, the reverse never, and the mixed cases flip at <b>T = ΔH/ΔS</b>." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Equilibrium",
  title:"HF is the weak one — acid strength runs HI &gt; HBr &gt; HCl &gt; HF",
  body:"Electronegativity suggests HF should be strongest, but acid strength is decided by <b>bond strength</b>, not polarity: the H-F bond is far too strong to break, so HF is a <i>weak</i> acid while the other three are strong. Down any group, weaker bonds mean stronger acids." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Reaction Mechanisms",
  title:"Always check whether the carbocation can rearrange",
  body:"If a 1° or 2° carbocation forms next to a carbon that could give it a <b>hydride or methyl shift</b> to a more stable 3° position, it will — and the product comes from the <i>rearranged</i> cation, not the obvious one. Examiners build entire questions on this. Any SN1/E1 answer that ignores a possible shift is usually the trap option." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Hydrocarbons",
  title:"Benzene refuses to decolourise bromine water",
  body:"Alkenes and alkynes decolourise bromine water instantly; <b>benzene does not</b>, because breaking its aromatic sextet costs more than the addition gains. That single test distinguishes unsaturation from aromaticity. Aromatic rings prefer <b>substitution</b>, which preserves the ring." },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Hydrocarbons",
  title:"Hückel's rule — count for 4n + 2",
  body:"A ring is <b>aromatic</b> if it is planar, fully conjugated and holds <b>4n + 2</b> π electrons (2, 6, 10…). With 4n electrons (4, 8…) it is <b>anti</b>aromatic and unstable; if it cannot stay planar or conjugated it is merely non-aromatic. Benzene has 6, so n = 1 — count π electrons first and the classification is mechanical." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"Chemistry in Everyday Life",
  title:"Drug classes by what they end in and what they do",
  body:"<b>Antacids</b> neutralise stomach acid (ranitidine blocks histamine receptors). <b>Antihistamines</b> treat allergy. <b>Analgesics</b> kill pain (aspirin is also an antiplatelet). <b>Antibiotics</b> kill bacteria — <i>never</i> viruses. <b>Antiseptics</b> go on living tissue, <b>disinfectants</b> on inanimate surfaces; the same phenol solution is one or the other purely by concentration." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"formula", topic:"Chemistry in Everyday Life",
  title:"Everyday chemistry quick reference",
  rows:[
    ["Antacid","Mg(OH)₂, NaHCO₃, ranitidine (Zantac)"],
    ["Antiseptic vs disinfectant","living tissue vs inanimate surfaces (dose differs)"],
    ["Antifertility drug","norethindrone + ethynylestradiol"],
    ["Artificial sweeteners","aspartame (unstable when cooked), saccharin, sucralose"],
    ["Soap vs detergent","soap fails in hard water; detergent does not"],
    ["Broad spectrum antibiotic","chloramphenicol, ampicillin"],
    ["Tranquilizer","equanil, diazepam — treats stress and anxiety"],
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"mnemonic", topic:"d & f-Block",
  title:"Why transition metals are coloured — and when they are not",
  body:"Colour comes from <b>d-d transitions</b>, which need a <i>partially</i> filled d subshell. So Sc³⁺ (d⁰) and Zn²⁺ (d¹⁰) are <b>colourless</b>, while Cu²⁺ (d⁹) is blue. The same rule governs magnetism: no unpaired d electrons means diamagnetic. Count d electrons first and both properties follow." },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"shortcut", topic:"Coordination Compounds",
  title:"Strong field or weak field decides everything else",
  body:"Place the ligand on the spectrochemical series — <b>CN⁻ &gt; NO₂⁻ &gt; en &gt; NH₃ &gt; H₂O &gt; OH⁻ &gt; F⁻ &gt; Cl⁻ &gt; Br⁻ &gt; I⁻</b>. Strong field ligands pair electrons up, giving <b>low spin, inner orbital, often diamagnetic</b> complexes; weak field ones leave them unpaired, giving high spin and paramagnetism. One lookup answers hybridisation, magnetism and colour together." },

/* ====================== CHEMISTRY — PROOFS ====================== */

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Chemical Kinetics",
  title:"The first-order integrated rate law",
  claim:"k = (2.303/t)·log([A]₀/[A]).",
  steps:[
    "A first-order reaction obeys −d[A]/dt = k[A].",
    "Separate the variables: d[A]/[A] = −k dt.",
    "Integrate from [A]₀ at t = 0 to [A] at time t: ln[A] − ln[A]₀ = −kt.",
    "Rearrange: ln([A]₀/[A]) = kt.",
    "Converting to base-10 logarithms gives <b>k = (2.303/t)·log([A]₀/[A])</b>. Because it is logarithmic, a plot of log[A] against t is a straight line of slope −k/2.303."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Chemical Kinetics",
  title:"Why a first-order half-life is independent of concentration",
  claim:"t₁/₂ = 0.693/k, no matter how much you start with.",
  steps:[
    "Start from the integrated law kt = ln([A]₀/[A]).",
    "At the half-life, by definition [A] = [A]₀/2.",
    "Substitute: k·t₁/₂ = ln([A]₀ / ([A]₀/2)) = ln 2.",
    "The initial concentration cancels completely — this is the key step.",
    "Since ln 2 ≈ 0.693, <b>t₁/₂ = 0.693/k</b>, independent of [A]₀ — which is exactly why radioactive decay (also first order) has a fixed half-life."
  ] },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Electrochemistry",
  title:"The Nernst equation",
  claim:"E = E° − (0.059/n)·log Q at 298 K.",
  steps:[
    "Thermodynamics relates free energy to the reaction quotient: ΔG = ΔG° + RT ln Q.",
    "For an electrochemical cell, ΔG = −nFE and ΔG° = −nFE°.",
    "Substitute both: −nFE = −nFE° + RT ln Q.",
    "Divide throughout by −nF: E = E° − (RT/nF) ln Q.",
    "Convert to base 10 and insert R = 8.314, T = 298 K, F = 96500: RT(2.303)/F ≈ 0.059.",
    "Therefore <b>E = E° − (0.059/n)·log Q</b>, and at equilibrium E = 0, which gives E° = (0.059/n)·log K."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Equilibrium",
  title:"Kp = Kc(RT)^Δn",
  claim:"Relating the two equilibrium constants for a gaseous reaction.",
  steps:[
    "For an ideal gas, PV = nRT, so the partial pressure is p = (n/V)RT = concentration × RT.",
    "Write Kp as the ratio of product to reactant partial pressures, each raised to its coefficient.",
    "Replace every partial pressure by (concentration × RT).",
    "The concentration terms reassemble into Kc, leaving RT raised to (moles of gaseous products − moles of gaseous reactants).",
    "That exponent is Δn, so <b>Kp = Kc(RT)^Δn</b>. When Δn = 0 the two are equal — which is why Kp = Kc for reactions like H₂ + I₂ ⇌ 2HI."
  ] },

{ exam:["JEE"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Equilibrium",
  title:"The Henderson-Hasselbalch equation",
  claim:"pH = pKa + log([salt]/[acid]).",
  steps:[
    "For a weak acid, HA ⇌ H⁺ + A⁻, with Ka = [H⁺][A⁻]/[HA].",
    "Rearrange for the hydrogen ion concentration: [H⁺] = Ka·[HA]/[A⁻].",
    "Take the negative logarithm of both sides.",
    "−log[H⁺] = −log Ka − log([HA]/[A⁻]).",
    "By definition the left side is pH and −log Ka is pKa, and flipping the ratio changes the sign.",
    "Therefore <b>pH = pKa + log([A⁻]/[HA])</b> — and when salt and acid are equimolar the log term is zero, so pH = pKa."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Solid State",
  title:"Packing efficiency of a face-centred cubic cell is 74%",
  claim:"The densest possible packing of identical spheres.",
  steps:[
    "An fcc cell contains 8 corners × 1/8 + 6 faces × 1/2 = <b>4</b> atoms.",
    "In fcc the spheres touch along the face diagonal, whose length is √2·a and equals 4r.",
    "So 4r = √2·a, giving r = a/(2√2).",
    "Volume of the four spheres = 4 × (4/3)πr³ = (16/3)πr³.",
    "Since (2√2)³ = 16√2, we get r³ = a³/(16√2), so the sphere volume is (16/3)π · a³/(16√2) = πa³/(3√2).",
    "Divide by the cell volume a³: efficiency = π/(3√2) ≈ 0.7405, that is <b>74%</b>. The same method gives 68% for bcc (spheres touch along the body diagonal, 4r = √3·a) and 52.4% for simple cubic (4r = 2a along the edge)."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Solid State",
  title:"Density of a unit cell",
  claim:"ρ = Z·M / (a³·N_A).",
  steps:[
    "Density is mass divided by volume, applied to a single unit cell.",
    "A cell contains Z atoms (Z = 1 for simple cubic, 2 for bcc, 4 for fcc).",
    "The mass of one atom is M/N_A, where M is the molar mass.",
    "So the mass of the cell is Z·M/N_A.",
    "The volume of a cubic cell of edge a is a³.",
    "Therefore <b>ρ = Z·M / (a³·N_A)</b> — the standard route from an X-ray edge length to a density."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Solutions & Colligative Properties",
  title:"Relative lowering of vapour pressure equals the solute mole fraction",
  claim:"(P° − P)/P° = x_solute — Raoult's law for a non-volatile solute.",
  steps:[
    "By Raoult's law the vapour pressure of the solution is P = x_solvent · P°.",
    "Subtract from P°: P° − P = P° − x_solvent·P° = P°(1 − x_solvent).",
    "For a two-component solution, x_solvent + x_solute = 1, so 1 − x_solvent = x_solute.",
    "Hence P° − P = P°·x_solute.",
    "Dividing by P° gives <b>(P° − P)/P° = x_solute</b>. It depends only on <i>how many</i> solute particles there are, never on their identity — which is what makes it colligative."
  ] },

{ exam:["JEE","NEET"], subject:"Chemistry", cls:"11-12", type:"proof", topic:"Thermodynamics",
  title:"ΔG° = −RT ln K",
  claim:"Linking free energy to the equilibrium constant.",
  steps:[
    "For a reaction at any composition, ΔG = ΔG° + RT ln Q.",
    "At equilibrium the reaction has no further tendency to proceed, so ΔG = 0.",
    "Also at equilibrium the reaction quotient equals the equilibrium constant, Q = K.",
    "Substituting both: 0 = ΔG° + RT ln K.",
    "Therefore <b>ΔG° = −RT ln K</b>. Read off the consequence: K > 1 makes ΔG° negative (products favoured), and K < 1 makes it positive."
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

/* ---------- MATHS — unorthodox hooks, chapter by chapter (11-12) ---------- */

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"shortcut", topic:"Trigonometry",
  title:"The five-finger trig table",
  body:"Hold up one hand for 0°, 30°, 45°, 60°, 90°. Count the fingers <i>below</i> the one you want, call it n, and <b>sin = √n / 2</b>. So 30° has one finger below → √1/2 = ½; 60° has three → √3/2. For cosine, count from the other end. The whole table lives in your hand — no memorising." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Trigonometry",
  title:"Allied angles — 90 and 270 flip the function, 180 and 360 do not",
  body:"For sin(90° ± θ) or anything built on <b>90° and 270°</b>, the function <b>changes</b> (sin ↔ cos, tan ↔ cot). For <b>180° and 360°</b>, the function <b>stays</b>. Get the sign from ASTC by asking which quadrant the angle lands in. Two rules replace a page of formulas — and this is where most sign errors in trigonometry actually come from." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Quadratic Equations",
  title:"If a + b + c = 0, then x = 1 is a root — free of charge",
  body:"Substituting x = 1 into ax² + bx + c gives exactly a + b + c, so if the coefficients sum to zero, <b>1 is a root</b> and the other is <b>c/a</b>. Similarly if a − b + c = 0 then <b>x = −1</b> is a root. Always add the coefficients before reaching for the quadratic formula — it factorises a surprising number of exam quadratics instantly." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Complex Numbers",
  title:"Multiplying by i is a 90° rotation",
  body:"Stop reading i as “imaginary” and read it as “<b>turn left</b>”. Multiplying by i rotates a point 90° anticlockwise in the Argand plane, so i² = −1 is just two quarter-turns landing you on the negative axis. Powers of i therefore cycle with period 4: <b>i, −1, −i, 1</b> — divide the exponent by 4 and use the remainder." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Complex Numbers",
  title:"The nth roots of unity always sum to zero",
  body:"They sit equally spaced on the unit circle, so as vectors they cancel perfectly: <b>1 + ω + ω² + … + ωⁿ⁻¹ = 0</b>. For cube roots this gives the two facts every question uses — <b>1 + ω + ω² = 0</b> and <b>ω³ = 1</b> — which reduce almost any ω expression to a number in one line." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Probability",
  title:"“At least one” means take the complement",
  body:"Never add up the cases for “at least one”. Compute <b>P(at least one) = 1 − P(none)</b> — one calculation instead of many. The same move handles “at least two” by subtracting the none and exactly-one cases. If a probability question mentions “at least”, reach for the complement before anything else." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Sequences & Series",
  title:"AM ≥ GM finds minima without calculus",
  body:"To minimise something like x + 1/x for x &gt; 0, apply AM ≥ GM: (x + 1/x)/2 ≥ √(x·1/x) = 1, so the minimum is <b>2</b>, reached when the terms are equal (x = 1). This kills a whole class of maxima-minima problems with no differentiation at all — and equality-when-terms-are-equal tells you <i>where</i> it occurs." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Matrices & Determinants",
  title:"Spot a zero determinant before expanding",
  body:"|A| = 0 immediately if any row or column is <b>all zeros</b>, if two rows/columns are <b>identical</b>, or if one is a <b>multiple</b> of another. Also worth carrying: A·adj(A) = <b>|A|·I</b>, |adj A| = |A|ⁿ⁻¹, and a matrix is invertible only when |A| ≠ 0. Scan for these before doing any expansion." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Binomial Theorem",
  title:"Middle term, and where the coefficients peak",
  body:"(a + b)ⁿ has <b>n + 1</b> terms. If n is <b>even</b> there is one middle term, the (n/2 + 1)th; if <b>odd</b> there are two. The binomial coefficients are largest in the middle, so “greatest coefficient” questions are answered by locating the middle term rather than by computing anything." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Mathematical Reasoning",
  title:"Negating “all” gives “some not” — and the contrapositive is the useful one",
  body:"The negation of “<b>all</b> P are Q” is “<b>some</b> P are not Q” (not “no P are Q”), and the negation of “p and q” is “not p <b>or</b> not q”. For implications, remember the <b>contrapositive</b> (~q → ~p) is always equivalent to p → q, while the converse (q → p) is <i>not</i> — that single distinction carries most of this chapter." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Linear Programming",
  title:"The optimum always sits at a corner",
  body:"For a bounded feasible region, the maximum and minimum of a linear objective always occur at a <b>vertex</b>. So you never search the interior: find the corner points, evaluate the objective at each, and pick the best. If the region is unbounded, check whether the optimum actually exists before answering." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Integration",
  title:"When stuck, add and subtract, or multiply and divide",
  body:"Many integrals crack open by adding and subtracting the same term to force a known form, or by dividing numerator and denominator by x² to set up a (x ± 1/x) substitution. For rational functions, try <b>partial fractions</b>; for √(a² − x²) forms, substitute a trig function. Recognising the <i>form</i> matters far more than raw manipulation." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"shortcut", topic:"Permutations & Combinations",
  title:"Tie together what must stay together",
  body:"If certain objects must sit next to each other, <b>bundle them as one unit</b>, arrange the bundle with the rest, then multiply by the internal arrangements of the bundle. For “never together”, compute total minus always-together. Circular arrangements of n objects give <b>(n−1)!</b>, halved again if reflections count as identical (a necklace)." },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"mnemonic", topic:"Mathematical Induction",
  title:"Induction is dominoes: one falls, and each knocks the next",
  body:"Two steps only — show it is true for <b>n = 1</b> (push the first domino), then assume it for <b>n = k</b> and prove it for <b>n = k + 1</b> (each knocks the next). The proof is worthless without both. In the inductive step you must actually <i>use</i> the assumption; if you never invoke P(k), you have not done induction." },

/* ======================= MATHS — PROOFS =======================
   type:"proof" entries carry `claim` (what is being shown) and `steps`
   (the derivation, one line each; the final step is the result).
   ============================================================== */

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"proof", topic:"Trigonometry",
  title:"sin²θ + cos²θ = 1",
  claim:"The fundamental Pythagorean identity, from the theorem of the same name.",
  steps:[
    "Take a right triangle with hypotenuse h, side opposite θ of length p, and adjacent side b.",
    "Pythagoras gives p² + b² = h².",
    "Divide every term by h²: (p/h)² + (b/h)² = 1.",
    "By definition p/h = sinθ and b/h = cosθ.",
    "Therefore <b>sin²θ + cos²θ = 1</b>. Dividing this by cos²θ gives 1 + tan²θ = sec²θ, and by sin²θ gives 1 + cot²θ = cosec²θ."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"9-10", type:"proof", topic:"Quadratic Equations",
  title:"The quadratic formula, by completing the square",
  claim:"For ax² + bx + c = 0 with a ≠ 0, x = [−b ± √(b²−4ac)] / 2a.",
  steps:[
    "Start from ax² + bx + c = 0 and divide by a: x² + (b/a)x + c/a = 0.",
    "Move the constant across: x² + (b/a)x = −c/a.",
    "Add (b/2a)² to both sides to complete the square on the left.",
    "The left side becomes (x + b/2a)²; the right becomes b²/4a² − c/a = (b² − 4ac)/4a².",
    "Take the square root of both sides: x + b/2a = ±√(b² − 4ac) / 2a.",
    "Hence <b>x = [−b ± √(b² − 4ac)] / 2a</b>, and the sign of b² − 4ac decides the nature of the roots."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Sequences & Series",
  title:"Sum of an AP — Gauss's pairing trick",
  claim:"Sₙ = n/2 [2a + (n−1)d].",
  steps:[
    "Write the sum forwards: Sₙ = a + (a+d) + … + (l−d) + l, where l = a + (n−1)d.",
    "Write the same sum backwards: Sₙ = l + (l−d) + … + (a+d) + a.",
    "Add the two lines term by term. Every pair sums to the same value, a + l.",
    "There are n such pairs, so 2Sₙ = n(a + l).",
    "Therefore Sₙ = n(a + l)/2, and substituting l = a + (n−1)d gives <b>Sₙ = n/2[2a + (n−1)d]</b>."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Sequences & Series",
  title:"Sum of a GP",
  claim:"Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1.",
  steps:[
    "Let Sₙ = a + ar + ar² + … + arⁿ⁻¹.",
    "Multiply throughout by r: rSₙ = ar + ar² + … + arⁿ.",
    "Subtract the first line from the second — every middle term cancels.",
    "This leaves rSₙ − Sₙ = arⁿ − a, that is Sₙ(r − 1) = a(rⁿ − 1).",
    "Hence <b>Sₙ = a(rⁿ − 1)/(r − 1)</b>. If |r| < 1, then rⁿ → 0 as n → ∞, giving the infinite sum <b>S = a/(1 − r)</b>."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Differentiation",
  title:"d/dx(xⁿ) = nxⁿ⁻¹ from first principles",
  claim:"The power rule, derived from the definition of the derivative.",
  steps:[
    "By definition, f′(x) = lim(h→0) [(x+h)ⁿ − xⁿ] / h.",
    "Expand (x+h)ⁿ binomially: xⁿ + nxⁿ⁻¹h + [n(n−1)/2]xⁿ⁻²h² + … + hⁿ.",
    "The xⁿ terms cancel in the numerator, leaving nxⁿ⁻¹h + (terms in h² and higher).",
    "Divide by h: nxⁿ⁻¹ + (terms still containing h).",
    "Let h → 0, so every remaining term with an h vanishes.",
    "Therefore <b>d/dx(xⁿ) = nxⁿ⁻¹</b>."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Differentiation",
  title:"d/dx(sin x) = cos x from first principles",
  claim:"Uses the sum-to-product identity and the standard limit sinθ/θ → 1.",
  steps:[
    "f′(x) = lim(h→0) [sin(x+h) − sin x] / h.",
    "Apply sin C − sin D = 2 cos((C+D)/2) · sin((C−D)/2).",
    "The numerator becomes 2 cos(x + h/2) · sin(h/2).",
    "So f′(x) = lim(h→0) cos(x + h/2) · [sin(h/2) / (h/2)].",
    "As h → 0, the bracket tends to 1 (standard limit) and cos(x + h/2) tends to cos x.",
    "Therefore <b>d/dx(sin x) = cos x</b>."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Limits & Continuity",
  title:"lim(x→0) sin x / x = 1, by the sandwich theorem",
  claim:"The limit every other trigonometric derivative rests on.",
  steps:[
    "For 0 < x < π/2, compare areas in a unit circle: triangle OAB, sector OAB, triangle OAC.",
    "These give the inequality sin x < x < tan x.",
    "Divide throughout by sin x (positive here): 1 < x/sin x < 1/cos x.",
    "Take reciprocals, which reverses the inequalities: cos x < sin x / x < 1.",
    "As x → 0, cos x → 1, so sin x / x is squeezed between two quantities both tending to 1.",
    "Therefore <b>lim(x→0) sin x / x = 1</b>. Note this requires x in <i>radians</i> — in degrees the limit is π/180."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Integration",
  title:"Integration by parts, from the product rule",
  claim:"∫u dv = uv − ∫v du.",
  steps:[
    "Start from the product rule: d(uv)/dx = u(dv/dx) + v(du/dx).",
    "Integrate both sides with respect to x: uv = ∫u(dv/dx)dx + ∫v(du/dx)dx.",
    "Rearrange to isolate the first integral on the right.",
    "This gives ∫u(dv/dx)dx = uv − ∫v(du/dx)dx.",
    "In differential form, <b>∫u dv = uv − ∫v du</b> — which is why LIATE only tells you which factor to call u."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Integration",
  title:"The king property: ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx",
  claim:"A substitution that cracks a whole family of definite integrals.",
  steps:[
    "Let I = ∫₀ᵃ f(x)dx and substitute x = a − t, so dx = −dt.",
    "When x = 0, t = a; when x = a, t = 0 — the limits swap.",
    "I = ∫ₐ⁰ f(a−t)(−dt) = ∫₀ᵃ f(a−t)dt.",
    "Since the variable of integration is a dummy, rename t back to x.",
    "Therefore <b>∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx</b>. Adding the two forms gives 2I, which is how integrals like ∫₀^(π/2) sinx/(sinx+cosx) collapse to π/4."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Quadratic Equations",
  title:"Why α + β = −b/a and αβ = c/a",
  claim:"The sum and product of roots, by comparing coefficients.",
  steps:[
    "If α and β are the roots, the equation can be written a(x − α)(x − β) = 0.",
    "Expand: a[x² − (α + β)x + αβ] = 0, that is ax² − a(α+β)x + aαβ = 0.",
    "Compare coefficients with ax² + bx + c = 0.",
    "Matching the x term: −a(α + β) = b, so α + β = −b/a.",
    "Matching the constant: aαβ = c, so <b>αβ = c/a</b> and <b>α + β = −b/a</b>."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Sequences & Series",
  title:"AM ≥ GM for two positive numbers",
  claim:"(a + b)/2 ≥ √(ab), with equality only when a = b.",
  steps:[
    "For any real numbers, a square is never negative: (√a − √b)² ≥ 0.",
    "Expand the square: a − 2√(ab) + b ≥ 0.",
    "Rearrange: a + b ≥ 2√(ab).",
    "Divide by 2: <b>(a + b)/2 ≥ √(ab)</b>. Equality holds exactly when (√a − √b)² = 0, that is when a = b — which is what tells you <i>where</i> a minimum occurs."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Complex Numbers",
  title:"The n-th roots of unity sum to zero",
  claim:"1 + ω + ω² + … + ωⁿ⁻¹ = 0 for ω ≠ 1.",
  steps:[
    "The n-th roots of unity are the solutions of zⁿ = 1, that is 1, ω, ω², …, ωⁿ⁻¹ where ω = e^(2πi/n).",
    "Their sum is a geometric progression with first term 1 and common ratio ω.",
    "Using the GP sum: S = (ωⁿ − 1)/(ω − 1).",
    "But ω is an n-th root of unity, so ωⁿ = 1 and the numerator is zero.",
    "Since ω ≠ 1 the denominator is non-zero, so <b>the sum is 0</b>. For cube roots this is the familiar 1 + ω + ω² = 0."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Permutations & Combinations",
  title:"Pascal's identity: nCr + nC(r−1) = (n+1)Cr",
  claim:"Proved by a counting argument rather than algebra.",
  steps:[
    "Count the ways to choose r objects from n+1 objects — by definition, (n+1)Cr.",
    "Now single out one particular object, call it X, and split the selections into two cases.",
    "Case 1 — the selection excludes X: then all r come from the other n objects, in nCr ways.",
    "Case 2 — the selection includes X: the remaining r−1 come from the other n, in nC(r−1) ways.",
    "The cases are exhaustive and mutually exclusive, so they add.",
    "Therefore <b>nCr + nC(r−1) = (n+1)Cr</b> — which is exactly how each row of Pascal's triangle builds the next."
  ] },

{ exam:["JEE"], subject:"Maths", cls:"11-12", type:"proof", topic:"Trigonometry",
  title:"The sine rule",
  claim:"a/sinA = b/sinB = c/sinC = 2R.",
  steps:[
    "In triangle ABC, drop a perpendicular of length h from A onto BC.",
    "From the right triangle on the left, h = c·sinB; from the one on the right, h = b·sinC.",
    "Equating them: c·sinB = b·sinC, so b/sinB = c/sinC.",
    "Repeating with a perpendicular from B gives a/sinA = c/sinC.",
    "Hence <b>a/sinA = b/sinB = c/sinC</b>, and a circumcircle argument shows the common value is <b>2R</b>."
  ] },

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

/* ======================= BIOLOGY — PROOFS ======================= */

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"proof", topic:"Evolution",
  title:"Deriving the Hardy-Weinberg equation",
  claim:"p² + 2pq + q² = 1, from nothing more than random mating.",
  steps:[
    "Let a gene have two alleles, A with frequency p and a with frequency q. Since these are the only alleles, p + q = 1.",
    "Under random mating, gametes pair independently, so genotype frequencies are the products of allele frequencies.",
    "An AA individual needs an A from each parent: frequency p × p = p².",
    "An aa individual needs an a from each: frequency q × q = q².",
    "An Aa individual can arise two ways (A from father and a from mother, or the reverse): frequency 2pq.",
    "These three genotypes are the only possibilities, so they must sum to 1.",
    "Therefore <b>p² + 2pq + q² = 1</b>, which is simply the expansion of (p + q)² = 1² — and any observed deviation means one of the five conditions has been broken, i.e. evolution is occurring."
  ] },

/* --------- BIOLOGY — unorthodox hooks, chapter by chapter (11-12) --------- */

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biological Classification",
  title:"Whittaker's five kingdoms — “My Pretty Face Points Ahead”",
  body:"<b>M</b>onera, <b>P</b>rotista, <b>F</b>ungi, <b>P</b>lantae, <b>A</b>nimalia. He sorted them on five criteria: cell structure, body organisation, nutrition, reproduction and phylogeny. Monera alone is <b>prokaryotic</b>; everything else is eukaryotic — that single split is the most asked point in the chapter." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biological Classification",
  title:"Three cell walls, three different materials",
  body:"<b>Bacteria</b> — peptidoglycan (murein). <b>Fungi</b> — chitin, the same stuff as an insect's shell. <b>Plants</b> — cellulose. And the exception worth memorising: <b>Mycoplasma has no cell wall at all</b> and is the smallest known living cell, which is exactly why penicillin (a cell-wall inhibitor) cannot touch it." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Biological Classification",
  title:"A virus carries DNA <i>or</i> RNA — never both",
  body:"That one rule answers most virus questions. Plant viruses are usually <b>RNA</b> (TMV), while bacteriophages are usually <b>DNA</b>. Viroids are naked RNA with no protein coat; prions are infectious <i>protein</i> with no nucleic acid at all. Outside a host a virus is inert crystal — the reason it sits on the border of living and non-living." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Molecular Basis of Inheritance",
  title:"Stop codons — “U Are Annoying, U Are Gone, U Go Away”",
  body:"<b>UAA, UAG, UGA</b> are the three stop codons; <b>AUG</b> is both the start codon and the code for methionine. Of the 64 codons, <b>61 code for amino acids</b> and 3 stop — which is why the code is called degenerate (several codons per amino acid) but never ambiguous (one codon never means two things)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Genetics",
  title:"Barr bodies = number of X chromosomes minus one",
  body:"A normal female (XX) has <b>1</b> Barr body, a normal male (XY) has <b>0</b>, Klinefelter (XXY) has <b>1</b>, and Turner (XO) has <b>0</b>. Count the X's and subtract one. Pair it with the three classic disorders: <b>Down = trisomy 21</b>, <b>Klinefelter = XXY</b> (male, sterile), <b>Turner = XO</b> (female, sterile)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Genetics",
  title:"Why colour blindness and haemophilia hit men hardest",
  body:"Both are <b>X-linked recessive</b>, and a male has only <i>one</i> X — so a single faulty allele shows up with nothing to mask it, while a female needs two. This is why such traits pass from carrier mother to son and skip the daughters, and why the father can never pass them to a son (he gives the Y)." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Sexual Reproduction in Plants",
  title:"Double fertilisation, and why coconut water is endosperm",
  body:"Two fusions happen: one male gamete fuses with the egg (<b>syngamy</b> → 2n zygote), the other with two polar nuclei (<b>triple fusion</b> → <b>3n endosperm</b>). It is unique to angiosperms. The memorable payoff: <b>coconut water is liquid endosperm</b> and the white kernel is its solid form — so you have eaten a triploid tissue." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Sexual Reproduction in Plants",
  title:"Ploidy of parts in a flowering plant",
  rows:[
    ["Egg cell / zygote","n / 2n"],
    ["Endosperm","3n (triple fusion)"],
    ["Nucellus and integuments","2n (maternal)"],
    ["Pollen grain / generative cell","n"],
    ["Embryo sac","n (7 cells, 8 nuclei)"],
    ["Perisperm","2n (residual nucellus)"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Reproduction",
  title:"The left kidney sits higher than the right",
  body:"The liver occupies the upper right of the abdomen and pushes the <b>right kidney down</b>, so the left is higher — the kind of odd asymmetry NEET likes. Two companions of the same sort: the <b>left lung has 2 lobes</b> while the right has 3 (the heart takes the space), and the <b>left ventricle wall is thickest</b> because it pumps to the whole body." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Body Fluids & Circulation",
  title:"Blood is 55% plasma, 45% cells — and plasma is 90% water",
  body:"Of the plasma, about 90-92% is water and 6-8% proteins — <b>albumin</b> (osmotic balance), <b>globulin</b> (immunity) and <b>fibrinogen</b> (clotting). Remove the clotting factors and plasma becomes <b>serum</b>. That definition — serum = plasma minus fibrinogen — is asked far more often than it is taught." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"formula", topic:"Body Fluids & Circulation",
  title:"Blood composition and clotting",
  rows:[
    ["Plasma / formed elements","55% / 45%"],
    ["RBC count","5-5.5 million per mm³ (no nucleus in mammals)"],
    ["RBC lifespan","120 days"],
    ["WBC count","6000-8000 per mm³"],
    ["Platelet count","1.5-3.5 lakh per mm³"],
    ["Serum","plasma without clotting factors"],
    ["Clotting cascade","thromboplastin → prothrombin to thrombin → fibrinogen to fibrin"],
  ] },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Organisms & Populations",
  title:"r-selected breed fast, K-selected breed well",
  body:"<b>r-selected</b> species produce many small offspring with no parental care and show exponential, boom-and-bust growth (insects, weeds). <b>K-selected</b> species produce few large offspring with heavy care and sit near the carrying capacity K (elephants, humans). The letters are the growth-equation symbols: r for rate, K for carrying capacity." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Organisms & Populations",
  title:"Naming interactions by who gains and who loses",
  body:"Score each partner + , − or 0. <b>Mutualism</b> (+,+), <b>competition</b> (−,−), <b>predation</b> and <b>parasitism</b> (+,−), <b>commensalism</b> (+,0), <b>amensalism</b> (−,0). Predation kills quickly, parasitism does not — that is the only difference between the two (+,−) cases, and it is the usual discriminator." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Mineral Nutrition",
  title:"Macronutrient or micronutrient is decided by quantity, not importance",
  body:"<b>Macronutrients</b> (C, H, O, N, P, K, Ca, Mg, S) are needed above 10 mmol/kg dry weight; <b>micronutrients</b> (Fe, Mn, Zn, Cu, B, Mo, Cl, Ni) below it — but a plant dies without either. Nitrogen is the element required in the <b>greatest</b> amount, and <b>molybdenum</b> in the least." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Environmental Issues",
  title:"BOD high means water is dirty",
  body:"<b>Biochemical Oxygen Demand</b> measures how much oxygen microbes need to break down the organic matter in water — so a <b>high BOD means heavy pollution</b>. Pair it with eutrophication: nutrients feed algal blooms, the blooms die, decomposers consume the oxygen, and the fish suffocate. The chain is the answer to most water-pollution questions." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Structural Organisation in Animals",
  title:"Four tissue types, one job each",
  body:"<b>Epithelial</b> — covers and lines (protection, secretion). <b>Connective</b> — binds and supports, and is the only one with abundant matrix (blood counts as connective tissue, which surprises people). <b>Muscular</b> — contracts. <b>Neural</b> — conducts impulses. If a question asks which tissue blood belongs to, the answer is connective." },

{ exam:["NEET"], subject:"Biology", cls:"11-12", type:"mnemonic", topic:"Human Health & Disease",
  title:"Active vs passive, innate vs acquired immunity",
  body:"<b>Active</b> immunity — your own body makes the antibodies (infection or vaccination); slow to develop but long lasting. <b>Passive</b> — ready-made antibodies are given (mother's milk, antivenom); instant but temporary. Separately, <b>innate</b> immunity is non-specific and present from birth, while <b>acquired</b> is specific and has memory." },

];
