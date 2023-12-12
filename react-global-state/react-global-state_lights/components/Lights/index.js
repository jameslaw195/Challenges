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
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={id}>
          <Light name={light.name} onToggle={handleToggle} />
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
