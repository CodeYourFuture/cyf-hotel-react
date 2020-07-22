import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      name: "London",
      img:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGBgYGBgXFxgYFxcYFhcXFxoVFxkYHSggGBolHRgXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy8lHyUtLS0tLy0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABNEAABAwIDBAcDBwcKBAcAAAABAAIRAyEEEjEFQVFhBhMiMnGBkVKhsRRCYpLB0fAHIzNDctLhFRYkU4KTorLC8TRUY3MXJYOzw+Ly/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJxEAAgICAgEEAgIDAAAAAAAAAAECEQMhEjFREyIyQQRhFEJxgcH/2gAMAwEAAhEDEQA/ALnXJdam5UsnNepSOK2O61c61Nyc13q+YW0a2d6xczJdWlkW0a2cJXJXcnJdjkiDYwrkKSAuQtYGRwllUhCgwlYPbIgw5zbcWuLT8FuW6DWrHZU0tUxamlqNikRamlqmLVwtRsFEJCaQpi1cLUbMQFq4WqYtXC1awUQFq5CmypuVGwURwrmCIi7QQNeN1BkUtAcFPJtFMVqReGyWkzeOC6djNJ1IHJXMKx5G8KU0X715zzZE/keksONr4grEbFHzT6oXWwzmmCtE6u5tst1SxTgRzXRizTupbIZcGOrWgNkSVvq1xdXM4/TL0LkKSFyEtjDIShPhdhazEcLsJ8LsIWGhkLsJ8JQtZhkLoanwlC1moZkVbACW/wBp59XuKmxNTK0nkfXd74VXZTuyW5SIIN4+cAdx8VGU6yJf5LRheNsvCiTooy1TsMKbO095vmFTk0SpMo5VwtVmpTG4yoy1MpC0QFqaQpy1MLU1gohIXCFKWrhatYCHKuZVLCWVGwURQp6JA8UzKkAlltDxdM0eBd2QSV19WXckIw+LIEKWpiLWXnSwyUj0Y5ouJexGFzN1jmgWLwxYdZHFF21zluUMruNwVT8fknQn5Ci1ZShJS5El2nDs2W19hWzMF4uBa43wg1XZ1RphzCDEjn4cdV6Di2qOjUA1E+O7wXnRzyjo7ZYoy2ecuZC4GrTdItnB7w+n86xHPiqON2O+iwPmZ1EGy6Y5otEHiaBEJQrzcE9wzBhIPBcqYBwbmg2MERom9SPkHBlMNXQwpwCcHFNYtDMiY4KcuKieELNQD27jGNyMe4tDpJIB0buBG+YUeA2jQz5Wvc4uIEQYmZvO659yu7YxTBkZ1jWvAe4hxboWODTDvpAKvs3aFMF/WVqcEtDQTTnutFsuvaXmZskvUdeT08UF6aX6DLQnBq6U5oXqWeZQwtTSFKQuFq1mohLU0tU5CblRsFEJauBkq5Rw5MwJUjcIfZlI8qQ8cTYPNE8FJRwZdHBG6GGI1HqVZ6qPm+K55flPpF4/irtlGrshoEtH2qGpgWcAD8UaNYaKniKOY2sueOaV7Z0PFGtIA4vDBpsbKvKM4vZ9UnQRxBVc7Jqez712wyxr3M454pX7UDy8p5oO4FW2YA2kXRrAYSBEJMmeMeh4YJS+Rlsh4H0SWz+QN4LqT+YvA38X9mmrUSUNxDSEZfUCEY1y5snRWHYKxVVWm7RbVDabm77zobaofiXXVCri4dbQLnWRo6niTRscNSAAgeCfWZNyLEIBh9tWFxfgtBQxjXMlXjNM5pQcTP7T2Y17wR2T8fLih+J2T1bSSZsjteq3N4KF9Vrh8UyzNasHpJ7oysKN4+z0m/uV2rhzJjSUD6RueKLgx2RzoAOurmggc4J8IldjyLi2jmUHySYIxmIZUrF00y1pyyT8xpNx4kk87J3XNsH9QAJL76D5sbx8dIQSm9zZZNLvdWewLnP1d51ukMY54EOpHMG60xcHqCJt/wBen7+C4pTtHclR6Ts1nWNDpbJAzBpBAJAkAjnI8k6vhwNEH6M1KtPMypB7LSCG5RBnRF+uJVcMpv3WRzRgtUQ5UsikU9Ms3yupyo5VFMqtpypRgirrDT5qQvadCoyyy+isMUfsWFECCrIpqFgCs037lyTf2dcfBIKKm6mykpNUzHBKtgbKQoDguHDyFbrQoOtSsZNkBaWroki6kYZ1hRPelsbs7UpgjRPpWCb1yjdWWs1Ms50lR69Jaw8C+NpA71BiMXIUtXCgsO68jxTXYcOaOKeUW12JFxvoC4qrKD4hat2zmka3VY7NbvChwaOhZIgfZ1EP7IMHmjuBpupS3iE7DYGmDYKxUYAZi6ZCSknop4l5lUn4gSreMcgdW7lk9jJaCFKsbjcVm+mIqNdSyt7D2PaYN5DmPBg/s663K0lGgWxJCC9McRakJjvwbey611RtpUJSuzKNwn/QJMlwh2sPdUmx4unkn4XZ7WkD5MRYG7rRFISJO7qmG3s8lqNgUc9MgEMqup9kzIa/LDTpa7p1ve1yrO1qjXMHZyPDZdTc4dhwGkgEOiwkHw5P6ftu99icvdVGT6O4yqazGkWcCTIGjGtaCI8YutnTCxHRx5NeheR+ck2t2W29QD6Lc0l0YX7Wc+f5I6WrrGcpToXQVayFbHjC8B6q5RoGIKgp4mLQFZbjOXvUZcmVXFdC+TqbDtso/lBO5do1bqE1ovF2X6eiY+pC7ReNVHiHBRfQ6WyGriuarHEKpixexVRsqXI6FBUFPlEJGtvSwVMHvKR1FoRQHRG5xiU1pJVtzwRACayibBNQnIrdWUkb/k8/iEk/psX1kTVKUGVC6xTqtXNAJ5+ka+qixD+aeTRKKZyoVE53BRGqqjMYCXiT2XZTbflabce8FJyKqBbqSLqN9dwVzDuDhdD9o4hoc1nGY8hN1jJ7oqYuuTuQ6nQLjOivt4pJ44l2Z5fo5h2ueQ3eAgnTWgWOpAsLm9u41mNw/G5azZjmjhKDflEw73souZUylrnk9lpBBYdxBvIHvQaMpO6MDhdumnoSIJEZLZhnaT3tew/8FPr7eLnXnVrbM3yxokl8/OZ+Ag5qPJdZkyTo2b9Zc9nUgH3p+WqSAQw33hpvmaJ7vP4cE/1xvQPuwx0bcflGHluWRU1i/YBjx+4rd0wsd0bwD2bRYHPzhtKo6IAiWsbuF++fwF6NQYOAVMeRRRLLjbYPDCnCkeCNUWtkZkQdRZGgVPVsj6dGabT+intaOA96LDC5jEwOe5Nq7Oc0peQ1LoFhqc0K6/BuHBRtw5O7RK9jx0MoqatSBHBRht1M2Rabc1CSoqpfYKxFOFWqN3oxiaPoVA7BFw7Go1lQcfB0Rmq2DaeJLVL8onemO2fVcYDTKjdgKg1aUu0P7WWevMhaTZb2uaOVj4rO4XZTyQXGFpaQYBY33+Kvibu2c2aukW+t8fRJV+vCS6OaOfgYk7fAxdOg7V1FxOsZiWnLw0Y9Ea2KO5eW9HtqPqY7DgkO7L2SRfKGVXzbfNvBenYaoBK5MicXR2wpqxoxJKxVHa7mDFufur0zAJmQ6HAchTpN/BW46ubxvC8Zxlc08wJjMPCYcYT4Y8rFyS4ntNOuQLHdPjKyfSLaD2YzDS6GAPJ5ggh084Ajms9h+mtZjHdY0OqPZkDmmAC0PIcQZvLtBHdCG4/a78WKdd7crgMji2YLmGc19JzaXVFhaexHkT6PR+jOM63DUnHWMp5OacpE77j3o8MGS2bHzusl0EcX4Ns6B1QDwzE38yVq8GCOIC3OnQJQtWhnVQhXSqrNJsxILtdO6Voqml9eI0KyfTOqWUmm0ku70x3TwQnTNC0YoATPL/TifuV3Btb1/LMbeLqKHUsUS0nK0kW1jRuIHH6R9eRVunjT1kgMu7id76fP8RzQcXY6aoPdH3ztB2lqLtP2qS2LamqwfRCqXbRdmgnqHXaCB36XFa+vUAdIOqDdIyVsvZiiGz8WXHIf4/xQajjYtEqSniyHBwHd/wBkFKmaULRp34e1inYRoaqmE2jnA7N1YL+Cumu0czT6ZNiWgmZshVeQTCuurTqqxqAFLNphiqIHsNimFztFNUrAITjMW5tVrx+jbTq5mi7nOGQtLRvIAcI5qTKxRcNRwN1I3ERpYrFbR6TvfVw5ouPVVKrKTpa2ZFTK+DfUdnlBWtY5szuStNDqgnQxYCVbGNKiGLbHdHospjNqVRjm0c35t2Y5crRAFKYnXW8+SLk6qxFFN9Gobi40UNWtKF1aqi69yjybOhY0gn1x4JIb1jkkNjcUeU9BGf8AmVCRaakf3VZe0swjTyXgGwNr/JscyoAXBrnCBFy9jmfOtq5bPav5SRVp1KdNlZj3Q1rgWNyunUFpnVd88Tk7OOGRJUepMwzheQBzK8Ox+Ga97TI7MmJ13ideAWk2f+UsUaTaVSnWqPbLXOJaZdJvLjJHig20dltD3EgfOJzNZz0gXnzKVR4MLfJFNuzh2RnBDS4i4kyTAKndhWUsMW52l2ZzhBEwdNDyVbD08znDq2gCb5GzZ0X3c0X2hs1ow4NpyvsGtvmNt06ATBRcndMyjq0a78nQjBM3dp/n2pWmZiAJkoH+Tmg1uDa03OeobyTqLCbxcI3tNjGtBLg0F9Ns/tva37UklbHT1Q6nWB3oD0yf+bb4u/y70f8AkAbvlZX8olXJSpWmXPGoHzOYQ4g5GLpMbfTT/Rip96JU6TOsE6B3/wAlOIPkECo4u05D5EezWHs/SPqFebjjmBDDd1+2Bq9vLw9CnknZotGh6KtJ2g8kX6h2l/1lNbRmFaLls+KxP5P604+q4tA/MHRwd+sp2JGi9J67ktwtCvJTK1HDt4AK1TwQG9Q5rzopHVig4UDm2SMolpuUnVoPJVH4gqB7pS0NXkIOrKriKkb1Wa0kxJuoMM8VM0E9lxafEQfgQfNDjYVSJdpY1tOkajpLW6xuG9x5eC8u6R7ZqVKoL/1T6YAEAua785DwNdG20karf9JsU2lh3tN8zSDcS0G0wdV5Hjcf1hLiZykNGocQBAJ5wAB48lTHHYs5aLb9udSyndk06hqsaWvgPL+sGYi5ud271XpXRnb1PHhzqIdDA3NIgAuzdnyyzwuL6x5ZgWh9QNIJgZoAaSTe3aIAFgTrqo62Gpk5CAYJDXWOhiJH+yo4rompM96xdZtOmXvBDWNLnGCYa0STAvuXlu0Ol7GYtuIeWwCYblfPVulhAjV2Uakxm5LJs9nLEDWRpO/mpKYacsixdA/xQeUx70ixpdjc/B7VsXHU8XRbXpAmm4uDSRE5XFpMeIKufIvon3rxJwsYbJBgjlx9DPqoev8Ao6ifEboQ9K+hvVrtnu3yL6J96S8O60/1fvSW4B5lPA7EOZjpv1geTujN/Aeqlw+xi6DNzUDv7Ob7ifRc2XQpZ22cSCDlgX7TTGu/TzVjZ9Gl1jeyc0jsw32wePCyo5smoIr/AMjl+Z03Ly4HkHCx+sfRaTaNMVXkAxZwtBBmQPEb1n6VClnBggyYbDbS926d32KxtGkzrnSwg5nEw0G5efCUkm2xopJD87xmBEtJMwIjtTa1zu56oztBw+TMlwnKd9xJJgj3LIPpUiD3yf2G27TfpeXmi+KYzqWTTmGv7UNmJvHDhqg47QU9MfgukNbDPLWO7Bnsm4l7YJG8Gw9Ee2/0ubisOBlyuFQVCNbCLAiJ1cL8lhcUQHWmN2aZ04ldq1eyRyj0VkhOR9BfKmh4Y4jM5pcBN4DmNmPF4WT/ACntb1NHs/Oqf+2eKx2O6SValdlR9QSKZYCIFusa8QWjWWg/wUPSHpNVxQa2q8uDS4gNY0XcwgzGXkd+hWcQJg/DsBMTa+/lXRPD4dpfwGbeeD6cfBAqVRlyS7U2yi1qu/NzPp4IkzaLA4Tm10yjXM205uTfVTkmPFo2XQUN+X1obEUXCB/3KfBejUcPIJELzf8AJtUD8bWMObNA6x/WM4E8vVelNEeKeOkTntkAYn9UE5+IY1uZzmhu8kiAfFSgggEHw4QgAZSaZTXUhNwFN6JVDPBajWU69K0MDc+oBi/K4OunJDapp4RxNVwDXANJBkNe1r6lzEmRmAJ/qwN4h/SHEllKq4Q11JocHEH54fAsQT2mD15LzLpZtV+IpUGhz3uLcz/zYYXEkQCQBIEGwnzSJbLf1AnTXpS7F1XBtm6Bo1y7gY3xr4nwQkMDKQOZmYuktObMAIi/dgqTB7L7ZDzl1Ja3vEATYC53Dz0Rmm0Ci6hkqS6tQiKYDAM1OWvgC5ItruVlrSIO3tg3YtQuqkAgueIaA2XSC2wLuyJA1Hqq2IxclwBEECM8h4MRcb7iYG5aLZ2MIdhmZcQOpqVTPVt6t2VtaWsdIJMWvbvKliMX17mkdc/qaRdL6bWkhtWhGQNN9DrxW/s/9G+gK7Euu0ubMRm7XLdM6E+q78oc5oGdgIJuJM965AuFqcXjs+K+ViliIY6iMrmNFXuVx2QDGpG/cVBRxzadf5VkrFtR2IENaOtB/Md8THtb0b/RqYCdjnkteCwGDLbkHTWNDff9i47EnMCOr4ReOcOmItoi2FxlPD06rXsrBlegCA1rR2c2IAD5OkOaZCt0qrQ12BIqCo/EUHCzeqGYUHHMJzZoad0aIXRqsEfLB7LfrfxSRT+bh5fVSSWinFlHYrf6UDE8RyhqtbOH9LY7LuaI8234Kpg3w5rhAdaTeBpJ1hT4N5D21LZuyJvvc2+saXQf/AoWFb/S2ujfAHm7y3ojtq9Y9m3KPat4yh2CPaa62YGxvOscY0VjaFQuqOBAPMu+laYI8UGthT0DcCwZnHLm7Lrf2mXWmdAwjZbeDw0zESsyyq4TDWiRBMmSC4Tq7gB6IvWxDupaJAtEGLQ4kc9/uRmroEXVlLHASbbt/wCwVVfhATa1zp4cFNiHuJOh/wDyeEqMVhNwZk/D19yZCsFYRji15t2DOmtj9ynwpc87gQN3iNxPNVsJWAbVuZJtrFwUtn1YeZ4HjyhUYiLzRBIhp14/T+lzPqrDQS4DK3WRY7nD6XIKrm7RMjU/6+XMe9WKdYB8k7zx4jlySsZMMbEfUp4xjuty9l5kC89W4jfbtELR7N6Q16j2g16naMAZuPARcrMbH2kyniM7ml7clUEEGDNJwgzpffzRPCuotqF9EHI3tslxIBgkM7RLuIkypT0VgrNfhsKw1nsLSS9rTMjcBaNQtdh3CIEWDYM7iB9s+izex9th7nANLSWNLcwBBygA3B4AX5qWvtl7mv6sudVp03iJB7TY0tB3+qlikovZTNFyQfx2I6uk99uwxzr6dkE35JYCt11FjxHbY10GY7TQYvBSfVYWOzRBBBDtCCNPBQ4HHNyU2syzlaAATAgaSAfgumUors5Yxk+h+KwRfSeKgAaWZXNIBDg1puIMzcwF5ziOqZTg53FuVoazKOyKlQ0y+pOpDoIEkZV6Htg5KD6tSHRYS2YluvZ5E6ibrzjHdKsPUc9lNjOtGTO57SZgiCGTuBBzXmTpAmSTZdNGRZWe+o/qm5AWmAwSTDGwC92/ThonU6lTrHUnGoSauHmX2Y4OnSb5iB4ZU99DFPqvDqdaXNJGVjg3uAi7BbeI8OSdhtgYkvI+SvGd7HF5IAYKebTR1yQfIK6IMh2TiHHFGm574pVKromRdxYQBoDDjdVMK29fI5xDMO4uJOnapuhoMREIjgsJUp4uq+sMoDXNp90us9rgXBpIAgGZuosPserWNQ0KlAMeMj+sOUnWwOUmIg2OvgELVg2QYbEF1GtV7T2ipSsX30eO8DNpnzTsRQqVKNItzFz6tVoZnGY5gwd4kA9ob98IhhOh9QMdSfiqOQwYaM1w6bmROp9VcHRFmamTieyxjWlgpEtcW/Os60+tzdG4+TbMlt0PDaDXE5hQAIBaSBneQDB8EQxjXtxwz1Cw56DnGRA7FMEkAxbjyWix/RbDVX53VngxlgMdECYgFroiUT6RYDD41lJlR72imPmNDc7oAzOmlwGgsEOUfISj1rP+Yb6t/eSTP5t4b/mMX/eH91dScYeSnqy8GX2RHXuls9kWjSzbp2znD5S2RIIaMoHE07/arGztn1B+dGWXC8kkacPIKxs3Zj8zKoyZrbzp2RpHIb0JSWzJMo7Pj5Sy24Wi5MlX9pgGo6W+76Q/Hkm7L2XUL6dURmzNAuY1jSPtT6uFc6q6YvEwT42seCDasKToBYNwvMG3C8y0BaHEAdQ0x8zh9MhDG7MLYDGvl1vnRaDfs20RTaFKq2k0dnumNTo4+HBGTTaBFNJg7EUmzdu7h9EqvUptmxIueNuyliRWmexpwPsnnwKrOq1AYIGp3H2fFMKwVhu5UM3Dh8CnbOu7yP2LlCmctQWvF+Go+1R02lpsfwVQmXRUOaOf733J7a8m8eg/G9DS48U+k9ag2F8XLYOab7wPZUmFx5OYzY7t0A6ofXJywSAZ844/jioaDyxzQL3aSNZBufKFuNh5UbXZG2aga5mYiAYuQA0Ay3zA9yODaQpOqAO7zXE31LjJudN6yGx6TqrqriHZRBDBJs5zWy4Xiwi/trUfyU8vrsc4UyGVZLSHOcA1pa0SyMsG5sZhc84Ky0cjov1NtlzHzuYT2nRIIM/ambP26+lQZUb1YLW5mlzheNLKns1tKpVFOpNRzsOXZHBpY2CBmAixObnbzVRuJo0cI41KdN1PutaW3JJJMmbgWECNQlUF4A5ursvbR26Ax2aq92eXkU5LM5HeiImw0Vfo7tCmaLT17mk5psSdTYkb4VvoJ0iZi2vpink6oDh2m3jTQ2Kq9GK1UdilADnuJkAxZl/QFM7Qt2kT7Q2jTBYDiXAF15z3A3CymNbDE/pT9U/uoX0y27hC5ucS5gcGOuT2xlcQ0QIMalEdh9N8LiHCm6GPNhmEBx4AmRPmtToXQK2ltzDMe5gYCMjgSWNlxOhvB43Xeh2Lw7mVC5zWS+wEbhckDTULcVNmUn3fTYTcTlGnAyvPtlNpUq73OpZmin3RFyXsAN7Wze8oLpjv6NY2rhD+ub5kfenAYbdWb9YfeqpxOEOuHeN5ywbX9h2mqIU9g4d7QercJvBc8HzGayANDG4egdKg+su/I6R0qf4lFW6M4Vuoy+Lv3lX/AJs4Z3dqnydSOv8AZKxi7/J7P6w/XSVH+aFP+sf/AIP3UkLNRjdnVCJOcXbZpFtDOpACfs3HltRpz3hsNIOUEZp1cBfs+iCNYfaf9YrjaJ9p/wBYq3HyDkw9svFZajHdYOzHZuRLTMxIBtzVnF4Os97xIY4t3mIm43z/ALLN0qRnvPHmpK+cm9R58XFBx2Hlo0tbZtYtY0O7pMkGTBngSTchS9IetbRHdgNy2I1Jc6xnW+iybKrgQQ50gg3cSLGdJupa2Ytyl74OozGPRBRdhctAitjXvM5gLD3CEwlx+cPx5K/S2ROhI81co7BdpLh5/wAV0KLfSIN+QGMPY9sX5LrMLHzx6LSHo4QJzPnhm/h9qq19jub7Y5uJE+ETKZwkgJpgf5HN849E4YUe2PRWjg3QTJgRNzvmPglSwpOpI8yk5DUUn4eTd49Ec+QMe8Na5oyNDQXAhzhHA7xp5ItsDoth6omoXETeA4HS0EE+i03/AIdUCP01b1EgcDZP6cmgckjKbEa+kauRzXNLAw3Iu6o2HaboIjmjuK2g4Yl7zScB1VcOaLwSKQzGBpY+q7tDoGad6FZ1rnrJ3XEQLrPs21Vw5rit23OD2TDrZoBOl9BuCjPHKOykZpkmxsc1mOc+oSGjDhkwSJy0iBYeKG9LMWDQotboc7uE9rLv/s+iM9H8RQq9YSATkb3mwJyBtpHEIZXwDajWCJaA63i8/aEEvcB/Evfkgs/Efs0+e96u4XFdRhKzzxLPVoJjyBHmq/RnZVSmHuoQye92iJDQTu/aQ3aZIwYbvdVM3mbU+XAOQe5B6ijH4yuXvLnG5Mn8ctPJMa20nT7U84d3sFddRdlAyneqkj2X8nm0n1sFTdUdmc1z2SdSG5Yk7zBieSz1Jv8ASHSOzkbP99SmyJ/kwp/0IAiIrVPgxDsK0nEFre9ktPHrqMLnfyZf+iNDsbZlJrRia0SwOg/NEEiQPcN8zxQvpF0zy6OLG3gN/SO5k/N8o5m6Z052wKQFJndpwAPafFvQf6t4C8txdcvcSTJOv3DgOSaMb2TbrQexPTCoT2GNHN3aJ5+PmVCOluJn9WfFg+9AWi/FPcMvj8FTihLZoP52Yn2KX1f/ALJLNzzXVuKDbN/S2eDuCtNwEbgrmEwYtA10sfduV8YePnabpBG8aXXYo/oQBuwY1sN/JVK2B4X8BPwWhfRBOYmQNRaL6QddyH4ljA7KADAgGLbpndzSuN/QUwOzBif4fcrlHBNOvvkKR+DZwPhPM7reimoUmggkH3CPRZY/0DmWsDs8A6Qd1jPqjWFwgHzSCNYb8FRo0piWE+o36jKY4aovTjh/i081VWhdMa/DS0kg2tp8I1QPaWDgFu+wsJ/jeePBaOpXaLgx6GRpIki0kb0NxlRpJMSbXABBAgySJgfiUs7aGjRjn1GMFSmTq5s/+nnnx729NwdJjj3yLE6cPDVW8RXDiXOaLybukG/omUACYaxpvplkeGsfBc8YFHI1HRuhF2ua8ndLcwtzvNvQLY0C+3ZI3Xgg87LKbIZVDZZl3yxoAI8dOOsorQNVwgufFv1kcTYtK6VEk2HgHGx08L+iB7Z2XmaRAMgi8a+qu9QdGuMC9yYNjqT96b8ndBggzvNx8beS1API9obCrUg7tHTWBF+FyYQuli69MZRUaLeyJAknf4r1HauEeQQ8Mg8ARP3EeKwu2tnFo7LXa2lsDfu+1QnhraHU70w30L2sBSqivUbmJOWYbYtA87hB67xUpsA3VT7qZQEtqwYjhIj71XoYiuyIcIvY6TBErnUdlXLVB2phFVdQhDnbQxHtt933KJ+NrmO0NOV+ZT2IbvZdKoyiwNFQavJbnA7XJoM2i6r9CXRiy9xeQKdRxzD2S11iRrb3LUdHJdhKBm5pMn6oWY2S/K93Njx9YgfaudbsvLpGX6VYwvrGTdsk/tvMn8cygEDijdalme8ne9w+qco+CifhhwCulo5wZR1EFNeZOqIuoqM0uSJqKEJK91S4saj1jDUydbHgJGngrbQQNBIGuUHz0uhtGrcDXfMkCSbaeKuNrTPajj5alsefquwQ5iKjSIjXeM3j83X+KH1aAZYze++BO8TqVbxVcZheDrodOBPqqlTGgzEgTGpMhGgNkD2DUR7/AHqSgA0yLkSIiYUTnDnPnPl+N6dSqnQD3R+PBNQthjBvJG+LG8aWkgaD0ROm/SBeeN4+y3NA6dYiCSJ5iBe0afBX6GI1MaezyvYkxu+CNGssVqznWAk6aDUnWeCD4uu9pjrDJ3TBEcbab513Ik/HAb54CbHlMx6INiqjXN7LIO82JJE7mk+HkPBI4jJgnFh13E3JkCx0+lA46LuDeHQ0kWM2Iad3ZG714b1RxONeLBxAGjSY9M2g4WOpVUYg++YJDrQJkQOA9FLoY2WzWvBJAcXaiCw+Ada263JHKG1HyGkFro0Lmh1geTi7RYzZjnvJJJytuCc2W9r3lsg+4LU7Ix4u0NMaE5bToT2SSfDkqxViNh2hjX30MHQv09aYnfv4q5VrEiYaHXiZjwLosUJpuHdIkGf1bmgTruseSfULRDG5LXAOUG++JPjuTcQWS4173MIBE8m5hPmQFmtpYRjxeZ5Et+HmiMy7sgmTBguE20MED7FUxoqFvcABtc5j8ZlOooVsye0cJTa0hs30EyT6j8Ss7iqW4e4g/BazGUJJElx3gAAWQTFUgJzBtuYkDneFy5MW7KRnozVXMNy7Sa53IcfuVvFspgaCOMz8CVUp17XK55KikXZstmdMDRpU6YYSKbcu64GnnCp7B2jnqXESHff9izZxMeh+HgoKOMewgtMEcgk4odyNBhWgsBO+T6klJzWoH/KD8oaLACLb0z5bU9op7EDL2clC8clQftB5BHHxkKA4h/tH1WswThJC+vdxPqksY9UboPD7lx+/xSSXofREQ7h8T/mVNu7zSSQfRvsT9/44qzs3u/WSSWRizV7vkfip9h9xJJUFG4/urnRr9FU8XfApJJZdjIznSv8ATfj6KYz/AIZn/cP+UJJLm+2OyHoX/wAQfEL16nu8EklTD8BcnZQwnff+N4Ue09D+yUklb7ELtD9EPD7lRxnd/tN/zJJJBjOt/SO8f9RQvF6nz+KSSCMzPY7uHwd8GrOHVJJcuTspElqb/BMoapJKQw3cuJJLGHFMK6ksYSSSSxj/2Q==",
      link: "http://visitlondon.com"
    },
    {
      name: "Manchester",
      img: "#",
      link: "http://visitmanchester.com"
    },
    {
      name: "Glasgow",
      img: "#",
      link: "http://peoplemakeglasgow.com"
    }
  ];
  return (
    <div className="cardsContainer">
      {cities.map((city, index) => {
        return (
          <div key={index} className="card">
            <h1>{city.name}</h1>
            <img src={city.img} className="card-img-top" />
            <div className="card-body">
              <a href={city.link} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
