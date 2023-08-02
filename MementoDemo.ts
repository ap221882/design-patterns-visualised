class LocationDemo {
    private static locationSequence = 0;
    private sequence = 0;
    private city: string = "";

    public moveTo(city: string): void {
        this.city = city;
        this.sequence = LocationDemo.locationSequence++;
    }

    public print(): void {
        console.log(`${this.sequence}: ${this.city}`);
    }
}



let locationDemo = new LocationDemo();
locationDemo.moveTo("Kolkata");
locationDemo.print();
locationDemo.moveTo("Indore");
locationDemo.print();
locationDemo.moveTo("Mumbai");
locationDemo.print();