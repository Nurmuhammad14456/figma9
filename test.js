class Bus {
  constructor(id, route, seats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reservedSeats = 0;
  }

  getDetails() {
    return `ID: ${this.id}, Yo'nalish: ${this.route}, O'rinlar: ${
      this.seats
    }, Band qilingan: ${this.reservedSeats}, Bo'sh: ${
      this.seats - this.reservedSeats
    }`;
  }

  reserveSeat() {
    if (this.reservedSeats < this.seats) {
      this.reservedSeats++;
      console.log(
        `Avtobus #${this.id} da orin band qilindi. Band qilingan: ${this.reservedSeat}`
      );
    } else {
      console.log(` Avtobus #${this.id} da bosh orin qolmagan.`);
    }
  }

  cancelReservation() {
    if (this.reservedSeats > 0) {
      this.reservedSeats--;
      console.log(
        `Avtobus #${this.id} da band orin bekor qilindi. Hozir band qilingan: ${this.reservedSeats}`
      );
    } else {
      console.log(` Avtobus #${this.id} da bekor qilinadigan band orin yoq.`);
    }
  }
}
