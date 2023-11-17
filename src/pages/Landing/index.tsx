import About from "../../components/SectionLanding/About";
import Intro from "../../components/SectionLanding/Intro";
import SourceCode from "../../components/SectionLanding/SourceCode";
import Header from "../../layouts/components/Header";

const navList = [
  { title: "Trang chủ", path: "/" },
  { title: "Giới thiệu", path: "#intro" },
  { title: "Về chúng tôi", path: "#about" },
  { title: "Ghi chú ngay", path: "/app/pad" },
  { title: "Đăng ký", path: "/register" },
];

export default function LandingPage() {
  return (
    <div className="overflow-auto h-screen">
      <Header navList={navList} />
      <main className="pt-4 mb-5 mx-2">
        <Intro />
        <SourceCode />
        <About />
      </main>
    </div>
  );
}
