let remainSeat = document.getElementById("remaining-seat") ; 
let bookedSeat = document.getElementById("booking-seat") ; 
let booked_seats = 0;
let remaining_seats = 30;

let seats = document.querySelectorAll('.seat');
seats.forEach((item)=>{
    
    let i = item.classList;

    item.addEventListener('click',function(){
        if(i.contains('booked')){
            i.remove('booked');
            booked_seats -= 1;
            remaining_seats += 1;
        }
        else{
            i.add('booked');
            booked_seats += 1;
            remaining_seats -= 1;
        }
        bookedSeat.innerHTML = `Booked Seats : ${booked_seats}`;
        remainSeat.innerHTML = `Remaining Seats : ${remaining_seats}`;
    })
})