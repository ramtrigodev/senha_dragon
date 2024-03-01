export default function generatePass(){
let password: string = ''
let characters: string =
'Aa@#123456789abcdefghijFGHIJKLMNOP!'
let passwordLegth = 8


for(let index =0; index< passwordLegth; index++)
{
    password += characters.charAt(
        Math.random()*characters.length
    )
}

return password


}