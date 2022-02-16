export const ajax: object = { 
get: (url:string, callback:any) =>{
return(
fetch(url)
.then(callback())
)},
 
post: (url: string, header: any, body: any, callback:any) => {
return ( fetch(url, {
method:"POST",
headers: header,
body: JSON.parse(body),
})
.then(callback)
       )
},

json: (url: string) => {
return ( fetch(url)
.then(res => res.json())
.then(json => JSON.parse(json)) 
       )
}}
