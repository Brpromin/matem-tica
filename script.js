// ══════════════════════════════════════════
// DADOS DAS FASES
// ══════════════════════════════════════════
const PHASES_INFO = [
  { name: "Fatoração",      sub: "T2 — Cálculo", color: "#5a8a4e", icon: "🌿" },
  { name: "Racionalização", sub: "T2 — Cálculo", color: "#4a6a9e", icon: "⚗️"  },
  { name: "Lim. Laterais",  sub: "T1 — Cálculo", color: "#8a4a2d", icon: "🔥"  },
  { name: "Aplicações",     sub: "T4 — Cálculo", color: "#7a5a2a", icon: "🏺"  },
  { name: "Limites ∞",      sub: "T3 — Cálculo", color: "#3a5a8a", icon: "🌊"  },
  { name: "Provas",         sub: "LiM/2025",     color: "#8a7a2d", icon: "📜"  },
  { name: "Derivadas",      sub: "Prova 2",      color: "#6a3a7a", icon: "⚡"  },
];

// ══════════════════════════════════════════
// QUESTÕES — 56 no total (8 por fase)
// ══════════════════════════════════════════
const QS = [

  // ─── FASE 0 — FATORAÇÃO (T2) ───
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→−6</sub> (2x + 12) / (x² − 36)</div>`, o:["−1/6","1/6","−2","Não existe"], a:0, e:"2(x+6)/[(x+6)(x−6)] = 2/(x−6). Em x=−6: 2/(−12) = −1/6" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→2</sub> (x³ − 8) / (x − 2)</div>`, o:["4","8","12","0"], a:2, e:"(x−2)(x²+2x+4)/(x−2) = x²+2x+4. Em x=2: 4+4+4 = 12" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→−3</sub> (x² − 9) / (2x² + 7x + 3)</div>`, o:["6/5","−6/5","2","3"], a:0, e:"(x−3)(x+3)/[(2x+1)(x+3)] = (x−3)/(2x+1). Em x=−3: −6/−5 = 6/5" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→0</sub> (5x³ + 8x²) / (3x⁴ + 16x²)</div>`, o:["0","1/2","5/3","8/3"], a:1, e:"x²(5x+8)/[x²(3x²+16)] = (5x+8)/(3x²+16). Em x=0: 8/16 = 1/2" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→2</sub> (x² + x − 6) / (x − 2)</div>`, o:["3","0","5","4"], a:2, e:"(x+3)(x−2)/(x−2) = x+3. Em x=2: 2+3 = 5" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→1</sub> (x⁴ − 1) / (x³ − 1)</div>`, o:["1","4/3","2/3","2"], a:1, e:"(x²+1)(x+1)(x−1)/[(x²+x+1)(x−1)] = (x²+1)(x+1)/(x²+x+1). Em x=1: 2·2/3 = 4/3" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→2</sub> (x³ − 7x² + 6x + 8) / (x² + 4x − 12)</div>`, o:["−5/4","5/4","−2","1"], a:0, e:"x²+4x−12=(x−2)(x+6). Após cancelar (x−2): (x²−5x−4)/(x+6). Em x=2: −10/8 = −5/4" },
  { p:0, q:`<b>🌿 Fatoração</b><br>Use fatoração para calcular:<div class="formula">lim<sub>x→1</sub> (x² + 6x − 7) / (x³ − x² + 2x − 2)</div>`, o:["7/3","3","0","8/3"], a:3, e:"(x+7)(x−1)/[(x²+2)(x−1)] = (x+7)/(x²+2). Em x=1: 8/3" },

  // ─── FASE 1 — RACIONALIZAÇÃO (T2) ───
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→4</sub> (2 − √x) / (4x − x²)</div>`, o:["1/4","1/8","1/16","1/2"], a:2, e:"4x−x²=x(2−√x)(2+√x). Cancela (2−√x): 1/[x(2+√x)]. Em x=4: 1/(4·4) = 1/16" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→−4</sub> (√(x²+9) − 5) / (x + 4)</div>`, o:["4/5","−2/5","−4/5","−8"], a:2, e:"Conjugado: (x²+9−25)/[(x+4)(√(x²+9)+5)] = (x−4)/(√(x²+9)+5). Em x=−4: −8/10 = −4/5" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→4</sub> (4 − x) / (2 − √x)</div>`, o:["2","0","4","8"], a:2, e:"(2+√x)(2−√x)/(2−√x) = 2+√x. Em x=4: 2+2 = 4" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→−5</sub> (x² − 25) / (√(x+6) − 1)</div>`, o:["10","−20","−10","5"], a:2, e:"Conjugado: (x−5)(x+5)(√(x+6)+1)/(x+5) = (x−5)(√(x+6)+1). Em x=−5: (−10)(1) = −10" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→−4</sub> 4x / (√(4−3x) − 2)</div>`, o:["−4","8","−8","−16/3"], a:2, e:"Conjugado: 4x(√(4−3x)+2)/(4−3x−4) = −4(√(4−3x)+2)/3. Em x=−4: √16=4 → −4·6/3 = −8" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→2</sub> (√(4x+1) − 3) / (x − 2)</div>`, o:["4/3","2/3","1/3","3/2"], a:1, e:"Conjugado: (4x+1−9)/[(x−2)(√(4x+1)+3)] = 4/(√(4x+1)+3). Em x=2: 4/6 = 2/3" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→2</sub> (√(6−x) − 2) / (√(3−x) − 1)</div>`, o:["2","1","1/2","−1/2"], a:2, e:"Racionalizando num. e den.: (√(3−x)+1)/(√(6−x)+2). Em x=2: 2/4 = 1/2" },
  { p:1, q:`<b>⚗️ Racionalização</b><br>Use racionalização para calcular:<div class="formula">lim<sub>x→−3</sub> (x² − 9) / (√(x+4) − 1)</div>`, o:["6","−6","−3","0"], a:1, e:"Conjugado: (x−3)(x+3)(√(x+4)+1)/(x+3) = (x−3)(√(x+4)+1). Em x=−3: (−6)(1) = −6" },

  // ─── FASE 2 — LIMITES LATERAIS (T1) ───
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (2x + 6) / |x + 3|<div class="formula">lim<sub>x→−3⁻</sub> f(x) = ?</div>`, o:["−2","2","0","Não existe"], a:0, e:"Para x&lt;−3: |x+3|=−(x+3). Logo 2(x+3)/(−(x+3)) = −2" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (2x + 6) / |x + 3|<div class="formula">lim<sub>x→−3⁺</sub> f(x) = ?</div>`, o:["−2","2","0","1"], a:1, e:"Para x&gt;−3: |x+3|=x+3. Logo 2(x+3)/(x+3) = 2" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (x² − 25) / |x − 5|<div class="formula">lim<sub>x→5⁻</sub> f(x) = ?</div>`, o:["10","−10","0","5"], a:1, e:"Para x&lt;5: |x−5|=−(x−5). Logo (x−5)(x+5)/(−(x−5)) = −(x+5). Em x=5: −10" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (x² − 25) / |x − 5|<div class="formula">lim<sub>x→5⁺</sub> f(x) = ?</div>`, o:["10","−10","0","5"], a:0, e:"Para x&gt;5: |x−5|=x−5. Logo (x−5)(x+5)/(x−5) = x+5. Em x=5: 10" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (x² − 5x + 6) / |x − 2|<div class="formula">lim<sub>x→2⁻</sub> f(x) = ?</div>`, o:["1","−1","0","2"], a:0, e:"Para x&lt;2: |x−2|=−(x−2). Logo (x−2)(x−3)/(−(x−2)) = −(x−3). Em x=2: 1" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>Seja f(x) = (x² − 5x + 6) / |x − 2|<div class="formula">lim<sub>x→2⁺</sub> f(x) = ?</div>`, o:["1","−1","0","2"], a:1, e:"Para x&gt;2: |x−2|=x−2. Logo (x−2)(x−3)/(x−2) = x−3. Em x=2: 2−3 = −1" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>f(x) = x²+1 se x&lt;1 e f(x) = (x−2)² se x≥1<div class="formula">lim<sub>x→1⁻</sub> f(x) = ?</div>`, o:["1","2","0","−1"], a:1, e:"Para x&lt;1, usa-se x²+1. Quando x→1 pela esquerda: 1²+1 = 2" },
  { p:2, q:`<b>🔥 Limites Laterais</b><br>f(x) = x/3−2 se x≤3 e f(x) = −2x+5 se x&gt;3<br><br>O lim<sub>x→3</sub> f(x) existe? Qual é?`, o:["Não existe","−1","1","0"], a:1, e:"Esq: 3/3−2=−1. Dir: −2·3+5=−1. Limites laterais iguais → lim f(x) = −1" },

  // ─── FASE 3 — APLICAÇÕES (T4) ───
  { p:3, q:`<b>🏺 Custo-Benefício</b><br>C(x) = 12x/(100−x) (milhões de reais)<br>Qual é C(25)?`, o:["R$ 3M","R$ 4M","R$ 5M","R$ 6M"], a:1, e:"C(25) = 12·25/(100−25) = 300/75 = 4 milhões de reais" },
  { p:3, q:`<b>🏺 Custo-Benefício</b><br>C(x) = 12x/(100−x) (milhões de reais)<br>Qual é C(50)?`, o:["R$ 6M","R$ 8M","R$ 12M","R$ 24M"], a:2, e:"C(50) = 12·50/(100−50) = 600/50 = 12 milhões de reais" },
  { p:3, q:`<b>🏺 Custo-Benefício</b><br>C(x) = 12x/(100−x) (milhões de reais)<br>Qual é C(80)?`, o:["R$ 24M","R$ 36M","R$ 48M","R$ 60M"], a:2, e:"C(80) = 12·80/(100−80) = 960/20 = 48 milhões de reais" },
  { p:3, q:`<b>🏺 Custo-Benefício</b><br>C(x) = 12x/(100−x)<br><br>Quando x→100⁻, o custo C(x) tende a:`, o:["R$ 1200M","R$ 100M","+∞","0"], a:2, e:"100−x→0⁺, então C(x)→+∞. Impossível remover 100% da poluição a custo finito!" },
  { p:3, q:`<b>🏺 Assíntota Vertical</b><br>Encontre os limites laterais de:<div class="formula">lim<sub>x→−8</sub> 3x / (x+8)²</div>Essa expressão tende a:`, o:["0","+∞","−∞","−8"], a:2, e:"Num: 3(−8)=−24&lt;0. Den: (x+8)²&gt;0 sempre. Logo: −24/0⁺ = −∞" },
  { p:3, q:`<b>🏺 Assíntota Vertical</b><br>Encontre os limites laterais de:<div class="formula">lim<sub>x→9/2</sub> 3x² / (2x−9)²</div>Essa expressão tende a:`, o:["0","+∞","−∞","9/4"], a:1, e:"Num: 3(9/2)²&gt;0. Den: (2x−9)²→0⁺ sempre. Logo: positivo/0⁺ = +∞" },
  { p:3, q:`<b>🏺 Limite Direto</b><br>Calcule:<div class="formula">lim<sub>x→2</sub> (x² − 2x) / (x² + 4x − 4)</div>`, o:["0","1","−1","2"], a:0, e:"Num em x=2: 4−4=0. Den em x=2: 4+8−4=8≠0. Portanto: 0/8 = 0" },
  { p:3, q:`<b>🏺 Assíntota Vertical</b><br>f(x) = (x²−3x+2)/(x³−2x²) = (x−1)/x²<br><br>Quando x→0, f(x) tende a:`, o:["+∞","0","−∞","2"], a:2, e:"Num→−1&lt;0; den=x²→0⁺ sempre. Logo: −1/0⁺ = −∞" },

  // ─── FASE 4 — LIMITES NO INFINITO (T3) ───
  { p:4, q:`<b>🌊 Assíntota Horizontal</b><br>Calcule:<div class="formula">lim<sub>x→±∞</sub> (2 − 3x²) / (5x² + 4x)</div>`, o:["0","2/5","−3/5","3/5"], a:2, e:"Divide por x²: (2/x²−3)/(5+4/x) → (0−3)/(5+0) = −3/5" },
  { p:4, q:`<b>🌊 Limite no Infinito</b><br>T(n) = (40n²−20n+7)/(8n²−10n+4)<br>Tempo de um rato num labirinto.<br>Quando n→+∞, T(n) tende a:`, o:["7/4 min","5 min","3/2 min","10 min"], a:1, e:"Coeficientes do maior grau: 40/8 = 5 minutos" },
  { p:4, q:`<b>🌊 Limite com Radical</b><br>Calcule:<div class="formula">lim<sub>x→+∞</sub> (√(25x² + 2) − 5x)</div>`, o:["5","1","0","1/10"], a:2, e:"Racionalizando: 2/(√(25x²+2)+5x) → 2/(+∞) = 0" },
  { p:4, q:`<b>🌊 Limite com Radical</b><br>Calcule:<div class="formula">lim<sub>x→−∞</sub> (√(4x² + 3x) + 2x)</div>`, o:["−3/4","3/4","2","0"], a:0, e:"Fazendo x=−t, t→+∞: √(4t²−3t)−2t. Racionalizando: −3/(√(4−3/t)+2) → −3/4" },
  { p:4, q:`<b>🌊 Piscicultura</b><br>Comprimento de um peixe do Rio Tapajós:<br>C(t) = 73t/(1,5t+1) cm<br><br>Qual o comprimento máximo?`, o:["73 cm","∞","48,7 cm","0 cm"], a:2, e:"lim t→∞: 73t/(1,5t) = 73/1,5 = 146/3 ≈ 48,7 cm" },
  { p:4, q:`<b>🌊 Engenharia de Pesca</b><br>R = mP/(P+n): recrutas em função de<br>procriadores P. m e n são constantes.<br><br>Quando P→+∞, R tende a:`, o:["0","m","n","+∞"], a:1, e:"mP/(P+n) = m/(1+n/P) → m. A população satura em m" },
  { p:4, q:`<b>🌊 Poluição do Ar</b><br>MC(p)=0,4√(p²+p+21), p(t)=20−7/(t+2)<br><br>Nível de poluição a longo prazo:`, o:["8,4 ppm","20 ppm","21 ppm","42 ppm"], a:0, e:"lim p=20. MC(20)=0,4·√(400+20+21)=0,4·√441=0,4·21=8,4 ppm" },
  { p:4, q:`<b>🌊 Assíntota Horizontal</b><br>Determine a assíntota horizontal:<div class="formula">f(x) = (5x³ − x² + 3x − 1) / (x⁴ + 2x³ − x + 1)</div>`, o:["y = 5","y = 0","y = 1","y = −1"], a:1, e:"Grau num.(3) &lt; grau den.(4) → limite = 0 → assíntota y = 0" },

  // ─── FASE 5 — PROVAS (LiM/2025) ───
  { p:5, q:`<b>📜 Prova 1 — LiM/2025</b><div class="formula">A = lim<sub>x→1</sub> (3x⁴−17x³+36x²−78x+56) / (x²−5x+4)</div>`, o:["0","5","15","−15"], a:2, e:"x²−5x+4=(x−1)(x−4). Num÷(x−1)(x−4) → 3x²−2x+14. Em x=1: 3−2+14=15" },
  { p:5, q:`<b>📜 Prova 1 — LiM/2025</b><div class="formula">B = lim<sub>x→−3</sub> (x² − 9) / (√(x+4) − 1)</div>`, o:["6","−6","0","−3"], a:1, e:"Conjugado: (x−3)(x+3)(√(x+4)+1)/(x+3) = (x−3)(√(x+4)+1). Em x=−3: −6" },
  { p:5, q:`<b>📜 Prova 1 — LiM/2025</b><div class="formula">lim<sub>x→1</sub> (√(4x²+6x−1) − (2x+1)) / (x−1)</div>`, o:["1","2/3","1/3","0"], a:2, e:"Conjugado: 2(x−1)/[(x−1)(√(4x²+6x−1)+(2x+1))] = 2/(3+3) = 1/3" },
  { p:5, q:`<b>📜 Limite Fundamental</b><div class="formula">lim<sub>x→1</sub> (e^(x−1) − 1) / (x − 1)</div>`, o:["0","e","1","−1"], a:2, e:"Fazendo u=x−1: quando x→1, u→0. Limite fundamental: lim(u→0)(eᵘ−1)/u = 1" },
  { p:5, q:`<b>📜 Crescimento Máximo</b><br>C(t)=(1,7t³+8t²+20t+5)/(0,04t³+t²+10t+4)<br>Comprimento máximo do peixe (t→∞):`, o:["20 cm","42,5 cm","∞","1,7 cm"], a:1, e:"Coeficientes do maior grau: 1,7/0,04 = 42,5 cm" },
  { p:5, q:`<b>📜 Poluição — Longo Prazo</b><br>p(t)=13−7/(t+2), M(p)=0,2√(p²+p+43)<br><br>Nível de poluição quando t→∞:`, o:["13 ppm","3 ppm","43 ppm","5 ppm"], a:1, e:"lim p=13. M(13)=0,2·√(169+13+43)=0,2·√225=0,2·15=3 ppm" },
  { p:5, q:`<b>📜 Prova 1 — LiM/2025</b><br>f(x)=(x⁴−5x³+4x²+20x−20)/(x²−5x+4)<div class="formula">lim<sub>x→1</sub> f(x) = ?</div>`, o:["−17/3","17/3","−5","0"], a:0, e:"Após cancelar (x−1): (x³−4x²+20)/(x−4). Em x=1: 17/(−3) = −17/3" },
  { p:5, q:`<b>📜 Lucro a Longo Prazo</b><br>L(t)=(t³−9t²+26t−24)/(t³−6t²+5t+12)+(3−5e^{−0,05t})·(√(9t²+4t)−3t)<div class="formula">lim<sub>t→∞</sub> L(t) = ?</div>`, o:["1 milhão","2 milhões","3 milhões","∞"], a:2, e:"1ª parte→1. (3−5e^{−0,05t})→3. (√(9t²+4t)−3t)→2/3. Total: 1+3·(2/3)=3" },

  // ─── FASE 6 — DERIVADAS (PROVA 2) ───
  { p:6, q:`<b>⚡ Identificar Regra</b><br>P(t) = (5t² + 2t + 1)⁴<br><br>Qual regra de derivação é necessária?`, o:["Regra do Produto","Regra do Quociente","Regra da Cadeia","Regra da Soma"], a:2, e:"P(t)=[u(t)]⁴ onde u=5t²+2t+1. Função composta → Regra da Cadeia", one:true },
  { p:6, q:`<b>⚡ Regra da Cadeia</b><br>P(t) = (5t² + 2t + 1)⁴<br>u = 5t² + 2t + 1 (função interior)<br><br>Qual é u'(t)?`, o:["10t+2","4u³","20t","10t+1"], a:0, e:"u = 5t²+2t+1 → derivando: u' = 10t+2" },
  { p:6, q:`<b>⚡ Regra da Cadeia</b><br>P(t) = (5t²+2t+1)⁴<br>P'(t) = 4(5t²+2t+1)³·(10t+2)<br><br>Calcule P'(0):`, o:["8","4","2","0"], a:0, e:"P'(0) = 4·(0+0+1)³·(0+2) = 4·1·2 = 8" },
  { p:6, q:`<b>⚡ Identificar Regra</b><br>Q(t) = e^{0,2t} · (t² + 4t + 3)<br><br>Qual regra para calcular Q'(t)?`, o:["Regra da Cadeia","Regra do Produto","Regra do Quociente","Regra da Soma"], a:1, e:"Q(t) é produto de e^{0,2t} e (t²+4t+3) → Regra do Produto", one:true },
  { p:6, q:`<b>⚡ Regra do Produto</b><br>Q(t) = e^{0,2t}·(t²+4t+3)<br>Q'(t) = e^{0,2t}[0,2(t²+4t+3)+(2t+4)]<br><br>Calcule Q'(0):`, o:["4,6","3","4","0,6"], a:0, e:"Q'(0) = e⁰·[0,2·3+(0+4)] = 1·[0,6+4] = 4,6" },
  { p:6, q:`<b>⚡ Regra do Quociente</b><br>R(x) = (120x²+500)/(x+5)²<br>R'(x) = 200(6x−5)/(x+5)³<br><br>Calcule R'(5):`, o:["0","5","−5","10"], a:1, e:"R'(5) = 200(30−5)/(10)³ = 200·25/1000 = 5" },
  { p:6, q:`<b>⚡ pH e Derivada</b><br>pH(t) = 3·ln(t²+1) − ½·ln(t+2)<br>pH'(t) = 6t/(t²+1) − 1/[2(t+2)]<br><br>Calcule pH'(3):`, o:["0,9","1,8","1,7","2"], a:2, e:"pH'(3) = 6·3/(9+1) − 1/(2·5) = 18/10 − 1/10 = 17/10 = 1,7" },
  { p:6, q:`<b>⚡ Calcule a Derivada</b><br>L(x) = −x³ + 12x² + 15x + 20<br><br>Qual é L'(x)?`, o:["−3x²+24x+15","3x²+24x+15","−x²+12x+15","−3x²−24x+15"], a:0, e:"Pela regra da potência: L'(x) = −3x²+24x+15", one:true },

];

// ══════════════════════════════════════════
// ESTADO
// ══════════════════════════════════════════
const TOTAL = 7, QPF = 8;

let G = {
  phase: 0, qi: 0, lives: 3, ps: 0, ts: 0,
  done:   Array(TOTAL).fill(false),
  scores: Array(TOTAL).fill(0),
  fb: false,
};

// ══════════════════════════════════════════
// UTILITÁRIOS
// ══════════════════════════════════════════
function show(id) {
  document.querySelectorAll('.screen').forEach(s =>
    s.classList.toggle('hidden', s.id !== id)
  );
}

function curtain(fn) {
  const c = document.getElementById('curtain');
  c.classList.add('on');
  setTimeout(() => { fn(); setTimeout(() => c.classList.remove('on'), 80); }, 360);
}

function phaseQs(p) { return QS.filter(q => q.p === p); }

// ══════════════════════════════════════════
// NAVEGAÇÃO
// ══════════════════════════════════════════
function startGame() { curtain(() => { show('map-screen'); renderMap(); }); }
function goToMap()   { curtain(() => { show('map-screen'); renderMap(); }); }

function resetGame() {
  G = { phase:0, qi:0, lives:3, ps:0, ts:0,
        done: Array(TOTAL).fill(false),
        scores: Array(TOTAL).fill(0), fb:false };
  curtain(() => show('title-screen'));
}

// ══════════════════════════════════════════
// MAPA
// ══════════════════════════════════════════
function renderMap() {
  document.getElementById('total-disp').textContent = G.ts;
  document.getElementById('map-grid').innerHTML = PHASES_INFO.map((ph, i) => {
    const locked = i > 0 && !G.done[i - 1];
    const comp   = G.done[i];
    return `<button class="dng-btn${locked ? ' locked' : ''}"
      style="border-color:${locked ? '#333' : ph.color}"
      onclick="${locked ? '' : `enterPhase(${i})`}">
      <span class="dng-icon">${locked ? '🔒' : ph.icon}</span>
      <span class="dng-name">${i + 1}. ${ph.name}</span>
      <span class="dng-sub">${ph.sub}</span>
      ${comp ? `<span class="dng-score">⭐ ${G.scores[i]}/${QPF}</span><span class="dng-ok">✓ Conquistado</span>` : ''}
    </button>`;
  }).join('');
}

// ══════════════════════════════════════════
// FASE
// ══════════════════════════════════════════
function enterPhase(i) {
  G.phase = i; G.qi = 0; G.lives = 3; G.ps = 0; G.fb = false;
  curtain(() => { show('game-screen'); renderQ(); });
}

function renderQ() {
  const qs = phaseQs(G.phase), q = qs[G.qi], ph = PHASES_INFO[G.phase];
  const nums = ['I','II','III','IV','V','VI','VII','VIII'];

  document.getElementById('phase-lbl').textContent  = `${ph.icon} ${ph.name}`;
  document.getElementById('score-disp').textContent = `${G.ps} ⭐`;
  document.getElementById('lives-disp').innerHTML   =
    [0,1,2].map(i => `<span class="hrt${i >= G.lives ? ' lost' : ''}">❤️</span>`).join('');
  document.getElementById('prog-fill').style.width  = ((G.qi / qs.length) * 100) + '%';
  document.getElementById('q-num').textContent      = `QUESTÃO ${nums[G.qi]} / ${nums[qs.length - 1]}`;
  document.getElementById('q-text').innerHTML       = q.q;

  const useOne = q.one || q.o.some(o => o.length > 18);
  const grid = document.getElementById('opts-grid');
  grid.className = 'opts ' + (useOne ? 'one-col' : 'two-col');
  grid.innerHTML = q.o.map((opt, i) =>
    `<button class="opt" onclick="pick(${i})">${opt}</button>`
  ).join('');

  document.getElementById('exp-box').style.display = 'none';
  document.getElementById('btn-next').className    = 'btn-next';
  G.fb = false;
}

// ══════════════════════════════════════════
// RESPOSTA
// ══════════════════════════════════════════
function pick(idx) {
  if (G.fb) return;
  G.fb = true;

  const qs = phaseQs(G.phase), q = qs[G.qi], ok = idx === q.a;

  document.querySelectorAll('.opt').forEach((b, i) => {
    b.disabled = true;
    if (i === q.a)         b.classList.add('correct');
    else if (i === idx && !ok) b.classList.add('wrong');
  });

  const eb = document.getElementById('exp-box');
  eb.style.display = 'block';
  eb.className = 'exp-box' + (ok ? '' : ' wrong');
  eb.innerHTML = (ok ? '✅ ' : '❌ ') + q.e;

  if (ok) {
    G.ps++;
    document.getElementById('score-disp').textContent = `${G.ps} ⭐`;
    flash('G');
  } else {
    G.lives--;
    document.getElementById('lives-disp').innerHTML =
      [0,1,2].map(i => `<span class="hrt${i >= G.lives ? ' lost' : ''}">❤️</span>`).join('');
    flash('R');
  }

  document.getElementById('btn-next').className = 'btn-next visible';
}

function flash(t) {
  const gs = document.getElementById('game-screen');
  gs.classList.add(t === 'G' ? 'flash-g' : 'flash-r');
  setTimeout(() => gs.classList.remove('flash-g', 'flash-r'), 420);
}

// ══════════════════════════════════════════
// PRÓXIMA / FIM DE FASE
// ══════════════════════════════════════════
function nextQuestion() {
  const qs = phaseQs(G.phase);
  G.qi++;
  if (G.qi >= qs.length || G.lives <= 0) endPhase();
  else curtain(() => renderQ());
}

function endPhase() {
  const qs = phaseQs(G.phase);
  const passed = G.ps >= Math.ceil(qs.length * 0.5);

  if (passed) {
    G.done[G.phase] = true;
    if (G.ps > G.scores[G.phase]) G.scores[G.phase] = G.ps;
    G.ts = G.scores.reduce((a, b) => a + b, 0);
  }

  curtain(() => {
    show('phase-complete');
    const ph = PHASES_INFO[G.phase];
    document.getElementById('pc-title').textContent  = passed ? 'TEMPLO CONQUISTADO!' : 'TENTE NOVAMENTE!';
    document.getElementById('pc-title').style.color  = passed ? '#c9a227' : '#cc6644';
    document.getElementById('pc-result').innerHTML   = `
      <div style="color:#c9a227">${ph.icon} ${ph.name}</div>
      <div>Acertos: <span style="color:${passed ? '#7acc5a' : '#cc7a5a'}">${G.ps}/${qs.length}</span></div>
      <div>Vidas: ${'❤️'.repeat(G.lives)}${'🖤'.repeat(3 - G.lives)}</div>
      ${passed
        ? '<div style="color:#7acc5a;margin-top:6px">✨ Próximo Templo Liberado!</div>'
        : `<div style="color:#7a6040;margin-top:6px">Mínimo: ${Math.ceil(qs.length * 0.5)} acertos</div>`}
    `;
    if (G.done.every(Boolean)) {
      setTimeout(() => curtain(() => {
        show('victory-screen');
        document.getElementById('final-score').textContent = G.ts;
      }), 2800);
    }
  });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
show('title-screen');
