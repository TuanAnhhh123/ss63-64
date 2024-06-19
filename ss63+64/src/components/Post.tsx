import React from 'react';
import './post.css'; 

const Post: React.FC = () => {
  return (
    <div className="post-management">
      <div className="search-filter">
        <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
        <button className="filter-btn">Lọc bài viết</button>
        <button className="new-post-btn">Thêm mới bài viết</button>
      </div>
      <table className="posts-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>State trong ReactJS</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gzMEHK3gdaVpibUkyo8TcMNsZTmMRdhnaw&s" alt="State trong ReactJS" /></td>
            <td>04/03/2024</td>
            <td><span className="status published">Đã xuất bản</span></td>
            <td>
                <button className="block-btn">Chặn</button>
              <button className="edit-btn">Sửa</button>
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tổng quan về ReactJS</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gzMEHK3gdaVpibUkyo8TcMNsZTmMRdhnaw&s" alt="Tổng quan về ReactJS" /></td>
            <td>03/03/2024</td>
            <td><span className="status published">Đã xuất bản</span></td>
            <td>
            <button className="block-btn">Chặn</button>
              <button className="edit-btn">Sửa</button>
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
 
    </div>
  );
};

export default Post;


