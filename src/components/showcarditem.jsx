import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
          
const Showcarditem = ({name,photo,cost}) => {
  return (
    
    
        <Card>
  <CardHeader>
    <CardTitle>
      <img src={photo} alt="" />
    </CardTitle>
    <CardDescription>{name}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{cost}</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
  }
    <div>Showcarditem</div>
  


export default Showcarditem