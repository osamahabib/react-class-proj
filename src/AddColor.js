import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    fontSize: '24px',
    backgroundColor: color,
  };

  const [colorList, setColorList] = useState(['orange', 'crimson', 'pink', 'purple']);

  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)} style={styles} type="text" placeholder="Enter a color" value={color} />
        {/* copy the color list and then add newColor to it */}
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
