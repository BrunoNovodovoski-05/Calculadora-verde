import Calculator from "@/components/Calculator";
import { Stack } from 'expo-router';


export default function Index() {
  return (
    < > 
    <Stack.Screen options={{title: 'Calculator'}} />
   <Calculator />
  </>
  );

 }

  