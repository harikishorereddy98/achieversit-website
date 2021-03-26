import React from 'react';
function Webdev() {
    return (
        <div >
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhAPEBAVFRUQFRAVFhYXEBUVGRYWFRcYGBYVFRUYHykgGBslGxUVITEhJSkrLi4uFyAzODMvOSotLisBCgoKDg0OGhAQGy0lHyIyLS8tLSsrLS0tLS0tLS0tLSstLS03LS0tNS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwUHBAj/xABLEAACAQMCAwUDBwcICAcAAAABAgMABBESIQUTMQYiQVFhB3GBFCMyQmKRoRckM1KC0dIVFkNUcpKx01Vkc5OUo7LwNGODosHC4f/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAQMDAQcDBQAAAAAAAAABAhEDBBIhEzFBURQiUmGx0fAycZEFIzNC4f/aAAwDAQACEQMRAD8A4xQKKBWsoJUhTpCgQzRSNMUAOsgIrFQaYmrM2rHSsi5PiKx23jWRvdUkVvvQMpPl8Klgfq/caxuPQj1qQI8GagQsgeJFRJ679cfGn131CojIydv/AINDJIY+HSp4+yfhUQc/V9aZ8Oo86BMgtM0jRTGZEiLlURSzNsFUEknyAG5NbC54Bdwo0ktncxoBku9rKigeZZlAFfQvYbsrBwa1SSRAbiQLzpAAzBm35aHwQHb1xk1tOH8YlLSPNpMWk6VRTlW1ud2bGRyzEOnUN5isWXX4sctsml+7NEdO2j5VUUEV1b22di4rUx8QtUCJM+iaNRhVkIJWRQNlBwwPhnHma5VWyElJWjPKLiyWakpqNMVMrZNTUxWMVMVIgzIKYqIqQpkGSFOkKdBEkKdIU6ZFjFOo080xDxRSzRmmIlTFQzTzTCidFRzToFRXKBRQKxHWJUhTpCgQGmKRpigAFT5dYxU9Zpid+DJGMdamSPWoR97rWYbdCKkit9zG3oc++smo/rg1F2I64NMqfFB99AiIBx9EVA438x+Fdm7D+zuCC0XiV/bieWUI8Vs7qiKr4xq5hCs5UlsNsOmMjNWqZ7SUrbz8ItDC2xdZrVgg1suy4VgdIVu70Ddc7VRLPFOjTHBJqz5vUeh6VMnxyfj++uhe0z2epw6WKW2fFtcsUBd9oXwW0M53KkBiDue6QfDNIMyIJEULIWOBKQwwo8VU43PmfdV8akrKZJp0YEs2JTV3BJnSz5VTjqdWOn769Fm0UMhZ2Z+UysnLA0uVOe8XwQuw8N8mvJLKzYLMWwABkk4A6AZ6Cs1lw+WY4ijZsdSNgPex2FS4EfV/FZkntRLG4KSCF1fOxVipDZHhg5rzIRytGsHaNe64IYlUUjHiK5H2Q7X3XCIhb3kaTWu+kGQa0JOSibHWPHSRgfrDpW8m9sXDkUtBw+cv1AcRIgb+0HYr7wtcXVaDJkyboVTVfX7m7Hnio8m69uvEY4+HCFxqa4lQINWCNGXMnqAQo/aA8a4Awj0pguHz3shdGN91x3vLbHnWy7VdprjiU5uLhhsNKIuyRr+qo/Ek7n7gNQozXYxx2xoxZJWz0yWLaikZEuF1Zj1Nt5kYyPDO21ecCvQiumHAZcdGGRj3GpK4KcvlAsWGlhq1b/VwPpZ2xt/jVtIps84qamvoLsT7LrW0jWS7jS4nbc61DRx+SpGdiRt3jk56YFWfifZKwuUKS2cJGMAiNUZf7Lrhl+Bqh50nRd7O2u58sipirP7QuyB4XcBFYtDMGaJzjOAe8jY+suV38Qw9QKwKvi01aMs4uLpkhTpCnUisWakDUMUUAZM0s1HNFMKJZp1GnQIKeaVFMCWaKjRQKjQ0CigVjOoSpCnSFAhtRQ1FABRRToAzW/jtWRh9mvMhPhUtTVNMrceTKwx4Y9aeF8VfHiPMeP4Vi1mmZm86Apn1Z20CNZ6wAUV7ZtuhUuo+7DVWeJWcZiuhGkIMbBcfJZUddbhVAdn0k79QN6qfs89oMUlt/JPE9QjRMRzr9WOPvBZPLTpGGAO2ARtk2eXjnCYlDy8aeaNCrLEJeYSQQQGVQSdx5DFcfU6WcpcRu/8Av3O7o9XDHjScmmndevb7P0Nh7b2ReEyq2ATJbKn9oSKTj9gP+NcBsOEzTDWoQIM5dzpX4Hx+Aq+9r+1f8rzqWjK2lvvEjNpZ5GG8ki+JC5AA2G+5zVO4zxqfnZ0cvlZEalM4B+sMjcnHX4eeepiVKjjZOWbSw7Hx7NK7N0OkDSD7+px9x93SrPDEqAKihQOgAwB8K1XZaaR4FeUsSSxDMckjJ393v/dXjaebiRuIbJ1RbeCW4fUWVpUjxqWPSp33GxIzmpkUartVfGeTloAREGOV1MfXVkDGMeG3r5V4Vd/5ncQEcUBeCJJLN70nUyfMpp1LMyx5Mg5i93cb9a8F/wBiXt4klnvrGMywLcJE1xIJWjZSVwnKwWOCMZxkdaN8fUHjkVgVlgmZGDoxVl6EHBFW+/8AZndwrIefZySRQm4aCO4YzcodXEbIMj4+lV7gXDRcuytIECrqJ8SB1xnYdetTjJPsQlFruZGe6u8nDyDOdl7oIA2B6DbG3r616ey0fL4hYiZSoF1bZDDGMSruc+ANWi6uRb/J4UwiOcazjSAozp8O83n/AI167y35y6Qy6cnOUDg+7PQjzobFXNnYuIS3eCkKKGZyA+RhY9LEtvnvbKBkHduhArxRDiuY1JttOMOx1M+fPC6VOxzsBkjoAdvF2d7YR6FiumKuoA5hBIfHi2Ojefh/hXv4122sbWIzPNqA6LGpdiT0G2wz5sQPWsThK6o1qcauyi+2wuLKyFwyGdp2bCDACiMhgud8ZMeSfE+6uOirL2+7RS8RnS4fAjKfMoGzoXO4b7eRv7gOgqtit2KDjGmYM01KVoYp0hTq0oCilSoAkKlioA0waBUTApEUA0ZpiFig0yaRoGKilRQM0dAooFYzpEqQp0hQIbUUjTFADFZxEKwL1r1rUolc3RBY8dDTAOcZqWfSnj7NSohZAqc42plD6U1TH1c1Oxtea2kADAdizHugIpY5+7y8aKHYSxqsax8s83U2onbYgaFVfHOc592KscnBeVGECpKcqNKxlXZScuHkwceHlgePmuylubieW6lUkr4kba222HooI+Iqx8WMiQv8mQa9goGBjJ3IB22FKXcmjQX10YXkhjdea5XBWMkxrglgWAJYnOQAM5Y+lePtTxNZOXGhDgKuXMYDFh10t4ZPUADcV7+xvD5EeeWZSDsmWbLZ2Zgfhp3P76O0cUEyNymUtAGxhwFBJ1MuejMQGOBvn8UNmki47IsHyUBdJDDVvq0sckZzjxI6dDW09m/F4rTiEMk7BIXWaKZj0COjdcfaCVVScdaA486k1aoim07Oz9pu39pPY8URJF5waa0tlGcvayclWddvokK5/Z9a1/anjcVzZwxwcSslVLCKKSJ4NUxkVDqVJNBK57oGCMHNcrIxudqCcbmq1hRPqv0O9cQ7XcOYzOLuGQS2nIEUNu5uXfGy85BnR17p23rnVn2YXnc7OEDBlRkyfUMG6Dyrx8B7PRXECyuzgszYKsvQHA2IONwa93E+06wuIIwGK9wu5wA2wB+1jfPSpQht7ClLcbD+QVLRM8juIRhVITGMYIOF38PurbgVXbTtIjEksuBpDjUF5Zzp1AnZ4yd+uRnxyMb2K5RmdVYEx4DD9XIyM/CpEGjNUJ4VdWRhlWBBHoakXHnQDQI57dWYhkmgdSzYHLYdc5BU48QRsfWvF02PhVt7ZWmUS4XZoyASPInY/Bv+qqxeKx0yswPODPkDG+ohgR4HI/Gro8ookqMVGajRTIUSpUsUUASoqNFAUTzRmoZozTFRPNKlmjNABRSzTpDNJQKKBWQ6JKkKdIUCGaYpGnTAFr0h68wrJopohJIy59aZfzNYgNNbjsjarPfWUMmNElxbqwPRlLrlT7xt8adkdts6H2G9kRuokub+WSJJAGSJMCQqejSMwOjI+qBnB6g7VY772OcPmSRbaaaKRNtXM5q6vtKdz5bEePlXTbmTSpI6+HdLbnpkDfFazgrYyoAXLZK5LbBAuF/VHdH3HzrK5zfJqUYJUcdtez0vDQbWb6epmLAkq4JwrKT4EKPxFWXs7O6W/Enjcoyx22lgFJUl3GQGBGfeDVh9pkI5cEn1g7L8GXJ/FR99UW3vJYiTDO8WrAOggasZxnIPmfvq3mUSutsi3wSJFM0jERSvwp7ibRGuVkymqURdNW3T0HnVM4Jx8cRubzhpu5LlL6ykSJ5bdIWWaPW6KqKN8BnbP2fSqPedqrmO6luba5ljdlMZctqdxkE6i+epVdvAKB6V47vtNeSzRXUl27TQfopDpDJuemBjxPXzpdNhvR2PgtwIOIQ8MVsDhnCJeYwAJE8hgZ209CcBG/aNaHhXHDeJxki9lulj4Vc6Xlto4CrNr1KFQbjCoc+vpXObXtFdx3El5HdOs8oYPKNOpgdOQcjH1F8PAV7v588S1iX5fLrClNWEzpJBK/R8wPuo6TH1Ym/7ByPDw7it9arrvIXtkQ8oSvFC7DU6IQevf3x9T0q88MjC3i3B029zccEea4AjwI5tcXzxiwSGzq2x/R4rkDdrL8zC7+Wzc4II9YYAlASQhAGlhlidwdzVi7IXUsvyi7eeVppi0UkjPktHhToyc93pttjAAxipSxyfJFTjVI6J2au0murA8wXFxHFcrNc/JjbiXIJjXQQCdI8cf4kDZdn7WCOSW5ijQfymplTugNyzFzZGP/qShcGqVDM6MHjdkZc4ZTgjIwevoaIZ5E0aJpF5YZUw30Fc5ZVyNgT19wqLxvwNZF5Nxxq7lisbBbe7mgY2rFY4raGRZGAGkO0n0BnbbzNbnh1kskvB1B0zWlrayNvtNC8bRunqUcRvk/rHHU1U4eI3KKI0uplRRgKGGAPIbdKxLcSgxuJpA0ShI21DKIAQFU46YYjfzo6bDejednb+7EXFQ9w3zfyhoRpi+aHOfSVOnc4we9nyrRPcF3bXJrkPeYnGo5JGogAAZIPh4V4Jrp4JdXNZY7oaJfIvnulz5NnB9wrLe2CylGLOrJnDI2kkHqpPkatjGnZXKVm74Z2ZbiCyRZ0R4w0mM4J3AUeLdD6fdn1r7N+DLiBriYyHo3NGo58VUJpI+Brc2d2lnwu3kLF42dea2QCVeXSxLL+qD8RHg+NUm/7NxheMoYRzrJhLE5lmbXCTrfUGc62EZUljnd96onlldJl0MUa5RpO3nYCThoFxFJzrZyAHwNSE/RD42IPgw2ztgbZpgr6JW5S/s+JRNGEQRFSvgr8hXcjyKyEj3xk+dfOqmtODI5rkyajGoPglUTTNRq8zodFKigY6KKKBBRRRQMKKKKANLQKKBWQ6BI0lp0CgQVJRSqaNTEwCGsoFQ5lBlqRB2xuRWS2ujG6SxnS8bK6t5MpDKfgQKxKM9akFXzoDsfTvZTtfDxm2HKkWKcaDLET3o2VgSVGQXQkbMPPfBBFbsQfJxzprs8uIEsZGCrjTglmJwBnLZPoPCvklSFIZScg5BBII9QR0r28QvhKkQeaaRlMmrXK7gdNBXUSB9bpVD09u7NC1DSqjsPaXtjBxGbl276kgBwf19WMyD7O2PPY+dV7sZ2Qi4s94Lm5uEktJhpVWQgI+dDAOpwco3Tw01zW3ujES0TOpxjIbH346iugexzjzjiYWVyflcbxHIG7KOZGTj0Rl/ap5I1HgjCVvkuLexW0JJN3dEkkknkEknqSeXS/IpZ/1u5/5H+XXTqKotltI5j+RSz/rdz/yP8uj8itn/W7n/kf5ddDvCGyvM0+BBVWB8dwRWovLpUl5nzrBNOdCpp6dN3HmPDwG/XMJZoxdOVP9xqF8pFRl9jNkoy15cgEgf0HUnA/o/M16YfZFBGMJxC9UZzhXiG/ngJXp4r2naXVHyRhZSV1kjCpoZR3CO9kgkZI26+A2vDOPd1p2WUoxwqDBK59CQMbHx8qnqHPCoOS/U6RXhyY8spRi+Y8srr+zWENGv8pcQzLrx86gPcGTtozWdfZVEd/5Tv8A4yoPwKVv2v1lZJ0TAgZwdahWTUvexjIHd36/Vr2PxiMBQhByBkKpBJIxkbdM7bdTt768eRzckk+HRZJRjVtclV/JTH/pO/8A99H/AAUfkpj/ANJ3/wDvo/4KuNpfksVcYK7MCcHJOdvgQevTGK2VWWxUjnUvskhcFX4jesD1BkiIPvBSue+0LhY4fcLZw3dzKOUrvzZQQCzEKgCgDoufiK+h6+Ye2fE/lV/eT+DSsq757keI0I96oD8asw25orzUoMvvsx7T272zcHvmVVJfku+ykSZ1RMfA5ZsbjIYgEEDN6PZef5TaziVWjt4TCyMobnKylGMkmQclRF9U/Q8a+cM17rPiLqjxtNKE0MERZXC6tsZUHGOtaZ6dSdplGPUOKpnWe3vaK34faS8MtZBJPca1mYEHQrkmQuR9dtTbeGsnYYFcbqK1PNW48agqRny5HN2KjFGaeasKw009NGaM0CHikaCaiTQCQUqM0qRIeaKVFAGnoFFNayHQJaaMVkAoxTohZjxTxUwKMU6CyGKeKyAUnooVkQKemlRTAmqeOa9aZMLxgAhGWVm2yBjR8QSy157S2eaSOGMZeV0jQebOQqj7yK+nOx3Y+z4PCuTHziPnLh9IZicZVCfopnGFHkM5O9ReRRJRg5eT5jli0HDhlJGQGUgn1wR0r1cGvzbTQ3C51QSRyYHjoYMV+IGPjX1bdPZ3imCUwTK+xRij59ynx9RXzx7Uexw4VdKIiTBcBniycldJGuMn62nUuCd8MM5IJMFPd7rRLZt5R9HxSB1V1OVYBgfMEZB+6lMxAOOu34nFVb2V8T+UcMtST3oQ0Db5/RHSufemg/GrTKuQQOv7t6zF5Tx2oWYtC6YBD57xOSAe73UO5qF7cKoB5ZUNGjFmJGOYFYrnHhsN/ICvZN2citykuThXGQX7uGyN9um9ZLQRh4REItRcHunrlW1agGOfWpavBpcmRThHlebf3M+jeqjFrNL6FJzzJHEWHOqRiA4GB3F+tjO6npVg7OKskUa6sBuYSQQcldIHX+0fuqzcUu2jwvcJOc4YqRjHv65rwXUzSmKUIchZB3FJ0nVjxxnYNVOvyZcuKvh7UuS3S4MeKba/272yE3DRoaMO2JNWoDAzlCudQGQd/wAK8NvwNYi7o+ohdOkyBhjOrSFIAGSD95r3vO4684ZyBlV3Ph470ptRBHKkyd91PXfGcH1P/e1c7T6jWR/tyctr7+79zTl0+CUlkpbl25Nxw61Ubqw9dJyCevw6/H4kVsK8vDYURSEJIzk5O4OBtv02x99equqUmo7X8U+SWV3cg4aOJ9H+0buxj++y18xC0ZYllxhC2hfUgeHmPX0rtntuvvze0sVYA3c652z3I8b4/tvGfhVAm4Y/EuIW/DojpC7MwGyLjVI2OmygADzwK06fi5FGfmkU5NyFG5PQDcn3Dxr1gvHHICmBIyqSdiCmGIA6/WWvprgXDLDhwW1t+VGzAbF15sh27zE95j/2Nq9XH+z9tfxmG6iVxvg47yE/WR+qn3VNapX2IPStI+UQaea23a3gL8Ou5rRzq0EFGxjXG26t7/A+oNafNaU7VoyuNOmSzTzUaKYqJZo1VGiixUSzSzSp0BQ6KVFADooooA04qVIU6yG4mGo11GjFMVIlqoJpBaloNMXAs0VIRmpco06FaIUVPlGmsRNFCtG77AXKRcSsJJMaRPGCT0Go6QT7iwPwrrHbbhd810XywTDkSa2C95wV2Ud7SqkaWwO/41w0weZFdk7Ee2NY4kt+JB2MYCidBrLAdOanXOMd5c58h1MZJp2iyE0+DU2vA7sssUTsV5Y3WSQ4lOnU4UDvb6zpOF3+Fe321yMlpwy3mOZtc8nXJWMAKAT+0v8Ad9KtfFPbNw2NcwCadj0VYmjGftNJjA9wPuri3bDjcl9dyXErByxCoQCqrGN1RVPTGTn1JPjSjcuapDnJJGfsv24u+HRvFbMgWRtbBow/e0hcjPTZR91br8r3E/14v+HX99UN0xvt4V7eF8KluX5MCmR8FtK46DGTuR503ij3ILLLwdJ4Z254rcxiRbi2wSQQbbJBHgd/cfjWW47X8ViUu1zaDAY724XOB0GTWo7Jdm76AyRy2kgR8MG1R4DDwwD4j/pFevtRwK+kj5UVmzh92OU2wcjSS+QdvLx61Dpw/GT3z9DxN7SuIt3i1sScbm1U/jSHtF4j523/AAi1oz2I4l4WLj9qP+Kl/MbiX9Tf+/H/ABUujH4h9SXwm7k9pPEAM5ttv9VSsP5UuIf6v/wiVqv5i8S/qT/3o/4qB2G4l/U3/vR/xVKOLGu7Iuc/CLRwP2hcUuC0cclumkav/CjB3weh671m4v7QuKW2A1zbMxx3Bbb48zvsNqq0XYzii502sq5GDiRBkeRw3TatXxjg1xalRdRNGZNRGoqdWMZOxPmPvqSxY2+PqReTIlyejtN2mueIukt0ykxroXSgUAE5O3mT4+gqyexa50cRYArrltrlItXQy5RwD8I2/GqHWexuHikjljkMboysrj6pB2b4eWDVnTW1xRWsj3qTO+cK7IXkamSRoWuJrgPM7Yk1QYxy11xnG/gMeG4wK2dlY8WRSrzxn5lkBBXuSn6Mg+aGoDpjpv6VoeCe2O0YaLsPGy7cxYy0cmPrBVJZc9cYPvqPaP2y2qIRYo80hHdZ0McanzYHDN54AGfMVgWlknSs60/6i5+9JR/go/tlmLX0KOVMsNpbJMVORzcu7DoPB1PQbMNqolZr27knkeaVy8krFnY9Sx6n09w2HSsNdKEdsUjjZJbpOXqFMUqYqZWPFKnSoAKKKKQBTpUUAOilRQBq6YpUxWY2mVRUwKxBqmhqSK2iaip4qOKkoqSK2GakDTxWOQ0xdxtQV8s0kXO+ayFvM0ARxvnT4eNG/XYf49P/AMqMjDwJNRkYHoNqCSRJt+rfhWeG67jRMcq7K24yVI6sD1G2x868YqVCY6Pb8jzMtvGVkMjoiFW2YuQF69NyMjw+FdD7GdkJrduJPLoEsULwoM6omMsWvLd3JUAx7YzudjVW9nDMeIW0QAKu+pgVB/RK0isPIgr19a7jZQBTM+DmeZmOR+qixg+7TEv3isWrzOL2r85N2kwRmtz/ADgqd3wPRPFHA1uBZQNJLrhGoNJzNDKVTCgsjk4PRem9VeCYQ8nmyWQ+RSM0+m2lOh5CvLMeIdz82ucfqirzx65VLe4zLEsl9zhEXi1IUSMkBwIyWXlozHUD9LAyMVRxciTTm5sW+U20xbNi3zk8QlxK2bbdVK53x9E4U53z4m2uS7Mop8EYJhFy1mlssW0oluQttLsJDEI2jxDu2MjbpkeVQjmACrcS2JCTJPdgWsp1QyckRsuId3POl6bjmjPQ4a3Wsx6rqwbn2twZM2LHmSRfKOXIc226oY4tjj9EcA5GVDdhjDrubBhLa3Bl/MW+cMRuOW29r9BOTFscfodgds2FIo7vO081ixMiXF3i2l79u/IMbD5nvOTO5wNxzB5HGQXWdXMmsizGKab82l71meS0f9Du3eU46jI8tlbXak25e4sTrt7gzfmDfOJFzdGPzYd1Bbp3Tj9CMA7ZlZ3a/m3MubE6oZzNixb5yCLXpUfmw7qiA93u/oxgHagCycA4HzRHPKbdo7olVMcGkm3EZ5URLp/5cZ3APdxXl7ddlGe1tNBGu3lECqAqoVnlCISABpOeX023PpWx7GcQaW0+Ti5gknRObFy4mRBGshRBoMS4GuJlOFyM5HgTaL9VliOMkYjlXAzkowkTA88qu1UrLKEzUsMJ4+x8+8U4TJbXDWs2kOhUE6u73gCG1HwwwOahLLyxJCjKyswy4XBbT0AJ+rnerl7Xiy3argBZIo5NlGWYF03bqcBR99UOuxhnuxqXqcfNDZkcV4GKKKKmUhTpUUwHRSooAlmlRRQIKdKigB0UUUAFFFFIDV0xRQKzG0lU4zUKkgqRBmfVQHpBaYWpFXAjLUDk+FZgKdFBaXYwaTUa9D71FEHiDRRLcYqYXNZyMfUpsD4kDr/hToW4wYorIwXfcmhXA8PjQFl29jttrvnk8IoJD+0zIo/AtXaq497INQuZZmZUi5TR7kDU5ZGAHqACfjXXZp0RTI7qqKMliwCgeZY7AVydbGXUOzoWukaPi/B3muYpnkiS2ghkGGhidw7hlYq8ikRrpKdDvpwRiqseDSq8ei44aUjS7UEx24bvmblHCxYGzx6gMD6exzvXvaJ2zN6xtrckW6Hc9Ocw+sfsA9B8T4YpGK04NNLbcnXyMmo1Ed1RV/M6MvA78acXPCe6GVe7BsratQH5vsDrbI+0fOgcCvhjFzwnuqyjuwbK2rUo/N9gdb5H2j51zrFPFXezL1M/tHyOk2nA7sHv3HCcCK4RcJBtrjkCgfMDC65MkeILbHJB9lhwiZHt2lk4U6RwzpImIV1FzPpVWEOVQ8xM4x9fY535Vinin7MvUPaPkd+teEItxBc2nJESo8TrGkIAU6m7jrGWPzjAldajbO5yDvwMbVwbsT2qfh8u+WgkI5ifhzE8mH4jY+BHcrC+inRZYZFdG6MpyPcfIjxB3FczVYZY5c8r1OrpM0Jx44foc59tFt/4Ob/bIf8A2sv/ANq5lXUvbCDJHbtG6ssTScxQQSC2kKx9NiPjXLBXU0iawq/zk5WtrrOh0UUVpMgUUUUAFFFFMBiilToAKKKKBBRRRQAUUUUAa2gUUVlNpOpxUUVJEH2M9RooqRUSptRRTESiFORiKKKfgj5POzk9TSooqJcFOlRTEXrs3KVjiVdgwDEYG5PU1Z54w1rfhtwttI4GTjUGQAkdD1PWlRW+POL+Ct/qOR0UUViJBTFFFAhinRRTEFdN7LxgcNtmGxklug2CcHSUAJXpnB69enlRRV2D/Ig8M8XF5SdUZ+iwIIwN6oC0UU8zuQvA6KKKpEFFFFADpUUUwCiiigB0UUUCCiiigBUUUUDP/9k=" alt="logo" width="550px" />
            <h1>These is the Ionic related content</h1>
            <p><b>what is Ionic</b></p>
            
            <p>In many ways, digital marketing is no different than traditional marketing. In both, smart organizations seek to develop mutually beneficial relationships with prospects, leads, and customers.But digital marketing has replaced most traditional marketing tactics because it's designed to reach today's consumers.</p>
           
        </div>
    )
}
export default Webdev