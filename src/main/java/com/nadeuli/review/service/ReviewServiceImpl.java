package com.nadeuli.review.service;

import com.nadeuli.review.bean.CommentDTO;
import com.nadeuli.review.bean.ReviewDTO;
import com.nadeuli.review.bean.ReviewPagingDTO;
import com.nadeuli.review.dao.ReviewDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDAO reviewDAO;
    @Autowired
    private ReviewPagingDTO reviewPagingDTO;

    @Override
    public void reviewWrite(ReviewDTO reviewDTO) {

        reviewDAO.reviewWrite(reviewDTO);

    }

    @Override
    public Map<String, Object> getReviewList(String pg) {
        //1페이지당 3개씩 - MySQL
        int startNum = Integer.parseInt(pg) * 3 - 3; //시작위치는 0부터

        //List객체가 JSON으로 자동 변환된다. - pom.xml <dependency>에 추가해야 함
        List<ReviewDTO> list = reviewDAO.getReviewList(startNum);

        //페이징 처리
        int totalA = reviewDAO.getTotalA(); //총글수

        reviewPagingDTO.setCurrentPage(Integer.parseInt(pg));
        reviewPagingDTO.setPageBlock(5);
        reviewPagingDTO.setPageSize(6);
        reviewPagingDTO.setTotalA(totalA);
        reviewPagingDTO.makePaingHTML();

        Map<String, Object> map = new HashMap<>();
        map.put("list", list);
        map.put("reviewPaging", reviewPagingDTO);
        map.put("totalA", totalA);

        return map;
    }
    public ReviewDTO getReviewView(String no) {
        int b_no = Integer.parseInt(no);
        return reviewDAO.getReviewView(b_no);
    }
    @Override
    public void boardViewPlus(String no) {
        int b_no =Integer.parseInt(no);
        reviewDAO.boardViewPlus(b_no);
    }
    @Override
    public void clickLike(String no) {
        int b_no =Integer.parseInt(no);
        reviewDAO.clickLike(b_no);
    }

    @Override
    public void commentWrite(CommentDTO commentDTO) {
        reviewDAO.commentWrite(commentDTO);
    }

    @Override
    public void commentCountUp(int bNo) {
        reviewDAO.commentCountUp(bNo);
    }

    @Override
    public List<CommentDTO> getCommentList(String no) {
        int b_no =Integer.parseInt(no);
        return reviewDAO.getCommentList(b_no);
    }

}
