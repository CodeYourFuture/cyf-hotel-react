import React from "react";

function TouristInfoCards() {
  let arrOfObj = [
    {
      srcImg:
        "https://fo8yow.dm.files.1drv.com/y4mwFGWzulXchztoQKtJxD-2rYTkuGTXJkGI0BXVSqsKhPZAOLxRf-P5lQXFqs6hgnVxcFem3NMLijudKfnrQNJP3GvtoekbipXxDeKPHscEDjz2z03PIGsSVn3O_9ebQsUXKEQAcf-KMg-Rxdu_bUJjQziA1BjmkSUHZsKy9ZKhdAFLBE6QZc5yFKNK_hyDvYxsV7iL2mqiLspnOT9fQ6A9Q?width=3396&height=5094&cropmode=none",
      url: "https://peoplemakeglasgow.com/",
      place: "Glasgow"
    },
    {
      srcImg:
        "https://sqnnla.dm.files.1drv.com/y4mHSlzTJ5ENdakX65qP-0ixJnBJFu3kTJCpTAq_P5ZPCTnAIKdky6G21qwKYaF-REmmqSuZtqlku3mK1lEkX9FOVGuBgjtovCV93QmbzcW7G12nYi9qPnf2u3pR7Q1LB_qPv0fUjNkT6RmLr49VKBw-Lw98qUjgBcGzkHTe5X9wrQB4hGOxiufPcMfLXpzbz20B6xt5rdzTutmO7uL9Djdbw?width=3203&height=4004&cropmode=none",
      url: "https://peoplemakeglasgow.com/",
      place: "Manchester"
    },
    {
      srcImg:
        "https://fopzfw.dm.files.1drv.com/y4mOvR43ITKoMTRQ9sSM8xNIsYAlu0sMQvrzLmT-v6zflI8okzdE5Rxr_5RdnGo5HzHZ0xnpxz73KiOtlVYSE7wC1OUv0SDLlqYTfPgUfY2LXhBEI2yclU3TAdWw0tcsYfhfJNTpGzeB4w7zlDKUhojybZMX4Eg_MdBNN2aREAHsCok60X40SCbLq4S7o8s7rKQbbwirZY2KtdsHMAVOkz4eQ?width=3024&height=4032&cropmode=none",
      url: "https://peoplemakeglasgow.com/",
      place: "London"
    }
  ];
  return (
    <div className="row">
      {arrOfObj.map((obj, index) => {
        return (
          <div key={index} className="col-sm">
            <img src={obj.srcImg} className="card-img-top" alt="" />
            <div className="card-body">
              <a href={obj.url} className="btn btn-primary">
                {" "}
                {obj.place}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
