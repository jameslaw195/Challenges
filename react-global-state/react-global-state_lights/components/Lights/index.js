import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights(handleToggle) {
  const lights = [
    { name: "Living Room", isOn: false },
    { name: "Kitchen", isOn: false },
    { name: "Bedroom", isOn: false },
    { name: "Bathroom", isOn: false },
    { name: "Garage", isOn: false },
    { name: "Porch", isOn: false },
    { name: "Garden", isOn: false },
    { name: "Office", isOn: false },
  ];

  return (
    <StyledLights>
      {lights.map((light) => (
        <li>
          <Light name={light.name} onToggle={handleToggle(light.id)} />
        </li>
      ))}
    </StyledLights>
  );
}

{
  /* //   return (
//     <StyledLights>
//       <li>
//         <Light name="Living Room" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Kitchen" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Bedroom" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Bathroom" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Garage" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Porch" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Garden" onToggle={handleToggle(light.id)} />
//       </li>
//       <li>
//         <Light name="Office" onToggle={handleToggle(light.id)} />
//       </li>
//     </StyledLights>
//   ); */
}
