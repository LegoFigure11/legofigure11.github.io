class LCRNG {
  constructor(seed = 0, add = 0x6073, mult = 0x41c64e6d) {
    this.seed = seed;
    this.add = add;
    this.mult = mult;
  }

  get high() {
    return this.seed >>> 16;
  }

  get low() {
    return this.seed & 0xffff;
  }

  next(adv = 1) {
    for (let i = 0; i < adv; i++) {
      this.advance(this.seed, this.add, this.mult);
    }
    return this.seed;
  }

  next16(adv = 1) {
    return this.next(adv) >>> 16;
  }

  advance(seed = this.seed, add = this.add, mult = this.mult) {
    this.seed = ((Math.imul(seed, mult) >>> 0) + add) >>> 0;
    return this.seed;
  }
}
