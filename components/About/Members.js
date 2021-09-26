import Image from "next/image"

const Members = () => {
  const members = [
    { name: "Executive Committee",
      members: [
        {
          name: "Mr. Salman Bin Kashif",
          position: "Chairperson",
          university: "Clemson University",
          place: "Clemson, USA",
          imageUrl: "/members/SalmanBinKashif.jpg"
        },
        {
          name: "Mr. Syed Ali Rizvi",
          place: "Boston, Massachusetts, USA",
          imageUrl: "/members/SyedAliRizvi.jpg"
        },
        {
          name: "Dr. Saif Sheikh",
          place: "Chicago, Illinois, USA",
          imageUrl: "/members/SaifSheikh.jpg"
        },
        {
          name: "Dr. Rehan Baqri",
          place: "Boston, Massachusetts, USA",
          imageUrl: "/members/RehanBaqri.jpg"
        },
        {
          name: "Dr. Shaida Andrabi",
          place: "Kashmir, India",
          imageUrl: "/members/ShaidaAndrabi.jpg"
        },
        {
          name: "Dr. Mohsin Khan",
          place: "Washington DC, USA",
          imageUrl: "/members/MohsinKhan.jpg"
        },
        {
          name: "Mr. Ali Muzaffar",
          place: "Irvine, CA, USA",
          imageUrl: "/members/AliMuzaffar.jpg"
        },
        {
          name: "Mr. Wasikul Islam",
          place: "Stillwater, Oklahoma, USA",
          imageUrl: "/members/WasikulIslam.jpg"
        }
      ]
    },
    { name: "Mentorship and Applications",
      members: [
        {
          name: "Mr. Shujaut H. Bader",
          position: "Team Lead",
          scholar: "SSGSA Scholar 2014-15",
          university: "Iowa State University",
          place: "Ames, USA",
          imageUrl: "/members/ShujautHBader.jpg"
        },
        {
          name: "Mr. Shiva Agarwal",
          scholar: "SSGSA Scholar 2018-19",
          university: "Western Michigan University",
          imageUrl: "/members/ShivaAgarwal.jpeg"
        },
        {
          name: "Mr. Sk Abdus Sayeed",
          scholar: "ISRA Scholar 2015",
          university: "Cleveland State University",
          place: "Cleveland, OH, USA",
          imageUrl: "/members/SkAbdusSayeed.jpg"
        },
        {
          name: "Mr. Sajad Sheikh",
          scholar: "SSGSA Scholar 2016-17",
          university: "Kent State University",
          place: "OH, USA",
          imageUrl: "/members/SajadSheikh.jpeg"
        },
        {
          name: "Mr. Md Ful Hossain Sk",
          scholar: "SSGSA Scholar 2018-19",
          university: "University of Kansas Lawrence",
          place: "Kansas USA",
          imageUrl: "/members/FulHossain.jpeg"
        },
        {
          name: "Mr. Omar Khursheed",
          scholar: "SSGSA Scholar 2018-19",
          university: "University of Massachusetts",
          place: "Amherst, USA",
          imageUrl: "/members/OmarKhursheed.jpeg"
        },
      ]
    },
    { name: "Finance",
      members: [
        {
          name: "Mr. Ajaharul Islam",
          position: "Team Lead",
          scholar: "SSGSA Scholar 2015-16",
          university: "Kent State University",
          place: "Kent, OH, USA",
          imageUrl: "/members/AjaharulIslam.jpg"
        },
        {
          name: "Mr. Sachin Gupta",
          scholar: "SSGSA Scholar 2017-18",
          university: "University of Massachusetts, Lowell",
          imageUrl: "/members/SachinGupta.jpeg"
        }
      ]
    },
    { name: "Web Portal",
      members: [
        {
          name: "Mr. Rajat Kant Goel",
          position: "Mentor",
          scholar: "SSGSA Scholar 2015-16",
          university: "Univ. of Southern California",
          place: "LA, USA",
          imageUrl: "/members/RajatKantGoel.jpg"
        },
        {
          name: "Mr. Prateek Jain",
          position: "Team Lead",
          university: "Aligarh Muslim University",
          place: "Aligarh, India",
          imageUrl: "/members/PrateekJain.jpg"
        },
        {
          name: "Mr. Prajjwal Nijhara",
          university: "Aligarh Muslim University",
          place: "Aligarh, India",
          imageUrl: "/members/PrajjwalNijhara.jpeg"
        },
        {
          name: "Mr. Roshan Sharma",
          university: "Aligarh Muslim University",
          place: "Aligarh, India",
          imageUrl: "/members/RoshanSharma.jpeg"
        }
      ]
    },
    { name: "Promotions",
      members: [
        {
          name: "Mr. Mohd Zubair",
          position: "Team Lead",
          scholar: "SSGSA Scholar 2013-14",
          university: "University of Arkansas",
          place: "Little Rock, AR, USA",
          imageUrl: "/members/Zubair.jpg"
        },
        {
          name: "Ms. Sadia Tanweer",
          scholar: "SSGSA Scholar 2016-17",
          place: "Finland",
          imageUrl: "/members/SadiaTanweer.png"
        },
        {
          name: "Mr. Kashif Ahmad",
          scholar: "SSGSA Scholar 2015-16",
          place: "Nevada,United States",
          imageUrl: "/members/KashifAhmad.jpeg"
        }
      ]
    },
    { name: "Outreach",
      members: [
        {
          name: "Mr. Mohd Toaha Umar",
          position: "Team Lead",
          scholar: "SSGSA Scholar 2017-18",
          place: "Munich, Germany",
          imageUrl: "/members/ToahaUmar.jpg"
        },
        {
          name: "Mr. Salman Khan",
          place: "Aligarh, India",
          imageUrl: "/members/SalmanKhan.jpg"
        },
        {
          name: "Ms. Madeeha Zubair",
          scholar: "SSGSA Scholar 2018-19",
          place: "Aligarh, India",
          imageUrl: "/members/MadeehaZubair.jpeg"
        }
      ]
    },
    { name: "Training and Skill Development",
      members: [
        {
          name: "Ms. Tanwee Kausar",
          position: "Team Lead",
          scholar: "SSGSA Scholar 2012-13",
          place: "San Diego, California, USA",
          imageUrl: "/members/TanweeKausar.jpg"
        },
        {
          name: "Mr. Sabahuddin Ahmad",
          position: "Team Lead",
          scholar: "ISRA scholar 2013-14",
          university: "Heinrich Heine University",
          place: "Duesseldorf, Germany",
          imageUrl: "/members/SabahuddinAhmad.jpeg"
        }
      ]
    }
  ]

  return (
    <div id="Members">
      <h1 className="my-8 bg-blue-850 lg:text-3xl text-2xl text-white text-center font-extrabold py-2 rounded-tl-3xl rounded-br-3xl">
        Members
      </h1>
      {members.map((committee, ind) => (
        <div className="mx-8 my-8" key={ind}>
          <h3 className="text-red-850 font-extrabold text-center text-xl lg:text-2xl">
            {committee.name}
          </h3>
          <div className="flex justify-center mt-4 flex-wrap">
            {committee.members.map((member, index) => (
              <div
                className="flex flex-col items-center text-center m-2 p-2 transform duration-200 hover:scale-110 cursor-pointer"
                style={{ maxWidth: 220 }}
                key={ind*10+index}
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="font-bold text-sm lg:text-base">{member.name}</p>
                {member.position && (<p className="text-red-850 font-bold text-xs lg:text-sm">{member.position}</p>)}
                {member.scholar && (<p className="text-xs lg:text-sm">{member.scholar}</p>)}
                {member.university && (<p className="text-xs lg:text-sm">{member.university}</p>)}
                {member.place && (<p className="text-xs lg:text-sm">{member.place}</p>)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Members
