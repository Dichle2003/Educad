import { useEffect } from "react";

function About() {
      useEffect(() => {
    document.title = "About - Educad";
  }, []);
  return (
    <div>
      <h2>Giới thiệu</h2>
      <p>Đây là trang giới thiệu. Bạn có thể viết thông tin về website, nhóm phát triển hoặc dịch vụ ở đây.</p>
    </div>
  );
}

export default About;