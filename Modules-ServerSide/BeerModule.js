function BeerHealBlood(sock,playerData,res){
    let statusheal=""
    playerData.forEach(player=>{
      if(player.socket==sock){
        if(player.currentLife!=player.maxLife){  
        player.currentLife=player.currentLife+1
        console.log(player.name +" now has" +player.currentLife+" lives")
        statusheal="Healed"
        res.send("OK")
        }
        else{
          statusheal="UnHealed"
          console.log(player.name +" has the max life")
          res.send("OK")
        }
      }
    })
    return statusheal
}
function removebeerGalting(playerData,sock){
    playerData.forEach(player=>{
        if(player.socket==sock){
          let status="true"  
          attackerName=player.name
          player.hand.forEach(function(data,index,object){
            if(data.card=="beer"&&status=="true"){
              status="false"
              object.splice(index,1)
            }
          })
        }
      })
}

module.exports= {
    BeerHealBlood,
    removebeerGalting
} 