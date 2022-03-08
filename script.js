*{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: #EFF3FF;
}

.container{
    border: 5px solid black;
    position: absolute;
    display: block;
    /* go hand and hand */
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    /*  */
    width: 350px;
    border-radius: 10px;

}
#card{
    /* background: radial-gradient(circle at 50% 50%, red 40%, white 99%); */
    /* background: radial-gradient(circle at 50% 50%, purple 25%, white 90%); */
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
    width: 100%;
    padding: 30px 20px;
}
#card img{
    display: block;
    position: relative;
    max-height: 200px;
    margin: 20px auto;
    width: 180px;
}

#name{
    font-size: 20px;
    font-weight: 900;
}

#number{
    font-size: 18px;
    font-weight: 400;
}
#type{
    display: block;
    position: relative;
    font-size: 18px;
    font-weight: 400;
    margin: 10px auto;
    text-align: center;
    width: 50%;
    background-color: yellow;
    border-radius: 50px;

}
#move_set1, #move_set2{
    display: block;
    position: relative;
    font-size: 18px;
    font-weight: 400;
    margin: 20px auto;
    text-transform: capitalize;
    text-align: center;
    width: 50%;
    background-color: white;
    border-radius: 50px;
}
#btn{
    display: block;
    position: relative;
    padding: 15px 60px;
    margin: 30px auto;
    font-size: 18px;
    background-color: #101010;
    color: white;
    border-radius: 5px;
    border: none;
}
#btn:hover{
    background-color: #101010;
    color: white;
    box-shadow: 0 0.5em 0.5em -0.4em #101010;
    transform: translateY(-0.25em);
}
@media only screen 
    and (device-width: 390px) 
    and (device-height: 844px) 
    and (-webkit-device-pixel-ratio: 3){
    .container{
        width: 270px;
    }
    #card img{
        max-height: 180px;
        width: 100px;
    }
    #btn{
        padding: 15px 40px;
    }
    #move_set1, #move_set2{
        width: 60%;
    }
}
