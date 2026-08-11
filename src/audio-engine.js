export class AudioEngine {
  constructor() { this.ctx = null; this.master = null; this.engine = null; this.engineGain = null; }
  async unlock() {
    if (!this.ctx) { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); this.master = this.ctx.createGain(); this.master.gain.value = 0.32; this.master.connect(this.ctx.destination); }
    if (this.ctx.state === "suspended") await this.ctx.resume();
  }
  setEngine(speed = 0, damage = 0, active = false) {
    if (!this.ctx) return;
    if (!this.engine) {
      this.engine = this.ctx.createOscillator(); const filter = this.ctx.createBiquadFilter(); this.engineGain = this.ctx.createGain();
      this.engine.type = "sawtooth"; filter.type = "lowpass"; filter.frequency.value = 360; this.engineGain.gain.value = 0;
      this.engine.connect(filter).connect(this.engineGain).connect(this.master); this.engine.start();
    }
    const now = this.ctx.currentTime; this.engine.frequency.setTargetAtTime(42 + Math.abs(speed) * 0.42 + damage * 0.8, now, 0.06); this.engineGain.gain.setTargetAtTime(active ? 0.075 : 0, now, 0.09);
  }
  hit(power = 0.5) { if (!this.ctx) return; this.noise(0.09 + power * 0.14, 110 + power * 100, 0.35 + power * 0.6); this.tone(70 + power * 38, 0.18, "square", 0.12 + power * 0.13, 0.35); }
  wall(power = 0.4) { if (!this.ctx) return; this.tone(55, 0.16, "triangle", 0.12 + power * 0.12, 0.25); }
  wreck() { if (!this.ctx) return; this.noise(0.65, 90, 0.85); this.tone(48, 0.75, "sawtooth", 0.28, 0.4); }
  countdown(number) { if (!this.ctx) return; this.tone(number ? 420 : 760, number ? 0.11 : 0.28, "square", 0.13, 0.15); }
  fanfare() { if (!this.ctx) return; [0, 0.13, 0.26].forEach((delay, i) => setTimeout(() => this.tone([392, 523, 659][i], 0.32, "square", 0.12, 0.18), delay * 1000)); }
  tone(frequency, duration, type, gain, attack = 0.01) { const at = this.ctx.currentTime, osc = this.ctx.createOscillator(), amp = this.ctx.createGain(); osc.type = type; osc.frequency.value = frequency; amp.gain.setValueAtTime(0.0001, at); amp.gain.exponentialRampToValueAtTime(gain, at + attack); amp.gain.exponentialRampToValueAtTime(0.0001, at + duration); osc.connect(amp).connect(this.master); osc.start(at); osc.stop(at + duration + 0.03); }
  noise(duration, cutoff, gain) { const frames = Math.ceil(this.ctx.sampleRate * duration), buffer = this.ctx.createBuffer(1, frames, this.ctx.sampleRate), data = buffer.getChannelData(0); for (let i = 0; i < frames; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / frames); const source = this.ctx.createBufferSource(), filter = this.ctx.createBiquadFilter(), amp = this.ctx.createGain(); filter.type = "lowpass"; filter.frequency.value = cutoff; amp.gain.value = gain; source.buffer = buffer; source.connect(filter).connect(amp).connect(this.master); source.start(); }
}
