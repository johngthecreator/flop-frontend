"use client";
export default function RandomCircle(props:{"top":string, "left":string }){
    const getRandomPosition = () => {
    
        const randomTop = props.top + "px"
        const randomLeft = props.left + "px"
    
        return { top: randomTop, left: randomLeft };
      };
    
    const randomPosition = getRandomPosition();
    return(
        <div
            className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full overflow-hidden"
            style={randomPosition}
            >
            <img
            src="https://images.unsplash.com/photo-1585819055828-e014c22da55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5jb2duaXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
            alt="Random Circle"
            className="w-full h-full object-cover"
            />
        </div>
    )

}