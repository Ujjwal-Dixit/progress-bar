import { useEffect, useState } from "react";

function ProgressBar() {
  const [time, setTime] = useState(100);
  const maxTime = 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time])

  const progressTime = maxTime - time;

  return (
    <>
      <div>
        <p>Downloading progress: {time} seconds left</p>
      </div>
      <div>
        <progress id="file" value={progressTime} max={maxTime}> % </progress>
      </div>
    </>
  )
}

export default ProgressBar;





/*
The <progress> element in HTML is used to represent the completion progress of a task. Here’s a detailed explanation of the attributes and content in your provided progress bar:

id="file": This is an identifier for the progress element. It is used to reference the element in CSS or JavaScript. In this case, id="file" allows you to apply styles or manipulate the progress bar using JavaScript.

value="10": This attribute represents the current value of the progress bar. It indicates how much of the task has been completed. Here, value="10" means the task is currently 10% complete.

max="100": This attribute defines the maximum value of the progress bar, which signifies the completion of the task. With max="100", the task is considered fully complete when the progress reaches 100.

Content: "32%": This is fallback text for browsers that do not support the <progress> element. It provides a textual representation of the progress. In your example, the fallback text is "32%", but it should ideally match the calculated progress based on value and max attributes. For instance, if the value is 10 and the max is 100, the fallback text should be "10%".
*/