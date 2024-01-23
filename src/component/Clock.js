import React from 'react'


export default function Clock(props) {
        let a;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date;
        let time;
        let minutes;
        let maridain;
        
        setInterval(() => {
            a= new Date()
            if (a.getHours()>=12 && a.getMinutes()>=0){
                maridain="PM"
            }
            else{
                maridain="AM"
            }
            let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            date = a.toLocaleDateString(undefined, options);
            let c= a.getHours();
            if (c>12){
                c=c-12;
            }
            // if (a.getSeconds() in i) {
            //     secound = ("0" + a.getSeconds());}
            if (a.getMinutes() in i) {
                    minutes = ("0" + a.getMinutes());
                
                // if (a.getHours() in i) {
                //     Hours = ("0" + a.getHours());
                // }
                time = c+ ':' + minutes + " "+ maridain;
            }
             else {
                time = c+ ':' + a.getMinutes()+" "+ maridain;
            }
            document.getElementById('time').innerHTML = time + "<br> on " + date;
        }, 1000 );
  return (
    <div>
      <div className=" mx-2">
        <div style={{color:"white"}}>
            <h6><span id="time"></span></h6>
        </div>
    </div>
    </div>
  )
}
