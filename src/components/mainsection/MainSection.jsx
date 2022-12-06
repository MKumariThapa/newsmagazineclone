import React from "react";
import CenterComponent from "./CenterComponent";
import LeftComponent from "./LeftComponent";
import "./MainSection.scss";
import RightComponent from "./RightComponent";
import RightComponentImg from "./RightComponentImg";

const datas = [
  {
    title: "Model",
    description:
      "Some interesting inspirations and camera settings during photo sessions in the studio. Thanks to this, your photos will be even better. We have create...",
    imgSrc:
      "https://images.unsplash.com/photo-1568252748074-f9c8d964e834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80",
  },
  {
    title: "Unsplash",
    description:
      "Do you know a portal with interesting photos on various topics and also free to download? I will check this article.Quick contactGet to know our offic...",
    imgSrc:
      "https://images.unsplash.com/photo-1619595956937-f35348cec320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "modern post",
    imgSrc:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    title: "Newspaper creates ",
    imgSrc: "",
    description:
      "We focus on and take care of the development of our articles, taking care of the highest level. Meet our creators and their biographies. In this secti...",
  },
];

const centerData = [
  {
    title: "Newspaper creates ",
    descrption:
      "We focus on and take care of the development of our articles, taking care of the highest level. Meet our creators and their biographies. In this secti...",
  },
  {
    title: "Our company ",
    descrption:
      "We focus on and take care of the development of our articles, taking care of the highest level. Meet our creators and their biographies. In this secti...",
  },
  {
    title: "Art Photo Gallery",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facere. Fugit cupiditate illum exercitationem quia debitis aliquid inventore unde cum ipsam explicabo, alias animi odit molestiae dolor voluptate est reprehenderit. Quia animi praesentium dolores qui optio, aut quaerat tempora deserunt officiis repellat! Sequi laudantium consequuntur a fugiat, ipsa itaque qui beatae asperiores voluptatum id vero cumque voluptatibus quisquam, et deserunt! Veritatis, distinctio modi excepturi itaque illum eaque ipsum dolore, eligendi vero molestiae natus error dolorem consequuntur beatae vel, enim magni autem id reprehenderit! Delectus, accusantium cum. Corporis itaque at, dolore ratione officiis nam in saepe pariatur! Beatae doloribus harum fugit.  ",
  },
];

//
const dataRight = [
  {
    imgSrcRight:
      "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "MKumari Darlami",
    position: "Fashion Designer",
    descr:
      "Lorem ipsum rerum quos voluptas, commodi , fugiat? Officia a tenetur velit eos itaque aliquid ad dolores ipsum!",
  },
  {
    imgSrcRight:
      "https://plus.unsplash.com/premium_photo-1661265882272-baf497d7a0a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Ash King",
    position: "Fashion Lover",
    descr:
      "Lorem ip  Quos,rerum ducimus minus. Impedit tenetur hic consectetur, sunt at cum veritatis adipisci labore pariatur nihil doloremque vel quia iste!",
  },
  {
    title: "Newspaper creates with a hobby",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661284807707-7f8c4440895f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGNvbXBhbnl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    description:
      "Lorem ipsum delectus ea mollitia reprehenderit recusandae. Praesentium  corrupti fugiat vel, magni deleniti? Aspernatur  minus. Neque  officiis, nesciunt ducimus quibusdam harum,   accusamus, laudantium ullam dolor consequuntur nemo suscipit repellat!    ",
  },
];

const MainSection = () => {
  return (
    <div className="main_section">
      <div className="left">
        <div className="left_row_one">
          <h4>Fashion Category</h4>
          <hr />
          <LeftComponent
            title={datas[0].title}
            description={datas[0].description}
            imagSrc={datas[0].imgSrc}
          />
          <LeftComponent
            title={datas[1].title}
            description={datas[1].description}
            imagSrc={datas[1].imgSrc}
          />
        </div>
      </div>

      {/* center */}
      <div className="center">
        <hr />
        <div className="container">
          <div className="row1 ">
            <h4>Modern post</h4>
            <p>
              In this section you will find all the latest articles added by our
              blog specialists. We invite you to read.
            </p>

            <img src={datas[2].imgSrc} alt={datas[2].title} />
            {/* <LeftComponent
              title={datas[3].title}
              description={datas[3].description}
              //   imagSrc={datas[3].imgSrc}

            /> */}
          </div>
          <div className="row2 center_row_two">
            <CenterComponent
              title={centerData[0].title}
              description={centerData[0].descrption}
            />
          </div>

          <div className="row3 center_row_two">
            <CenterComponent
              title={centerData[1].title}
              description={centerData[1].descrption}
            />
          </div>

          <div className="row3 center_row_two">
            <CenterComponent
              title={centerData[2].title}
              description={centerData[2].descrption}
            />
          </div>

          <div className="row3 center_row_two">
            <CenterComponent
              title={centerData[0].title}
              description={centerData[0].descrption}
            />
          </div>
        </div>

        <hr />
      </div>

      <div className="right">
        <div className="row1 right_row1">
          <p>Newspaper from scratch</p>
          <h2>Our company creates with a hobby</h2>
          <span>Employed people</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            obcaecati ea fuga nemo! Molestiae, temporibus facere recusandae
            cupiditate illum ut!
          </p>

          <div className="row2">
            <RightComponent
              imageProfile={dataRight[0].imgSrcRight}
              name={dataRight[0].name}
              position={dataRight[0].position}
              descr={dataRight[0].descr}
            />
            <RightComponent
              imageProfile={dataRight[1].imgSrcRight}
              name={dataRight[1].name}
              position={dataRight[1].position}
              descr={dataRight[1].descr}
            />
          </div>
        </div>
        {/* <div className="row2">
          <RightComponent
            imageProfile={dataRight[0].imgSrcRight}
            name={dataRight[0].name}
            position={dataRight[0].position}
            descr={dataRight[0].descr}
          />
          <RightComponent
            imageProfile={dataRight[1].imgSrcRight}
            name={dataRight[1].name}
            position={dataRight[1].position}
            descr={dataRight[1].descr}
          />
        </div> */}
        <div className="row3">
          {/* <LeftComponent
            title={dataRight[0].title}
            description={dataRight[0].description}
            imagSrc={dataRight[0].imgSrc}
          /> */}

          <RightComponentImg
            title={dataRight[2].title}
            description={dataRight[2].description}
            imagSrc={dataRight[2].imgSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
