package com.nadeuli.member.service;


import com.nadeuli.member.dto.MemberRequestDTO;
import com.nadeuli.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class MemberServiceImpl implements MemberService {

    @Autowired
    private  MemberRepository memberRepository;


    /*로그인 구현 */
    @Override
    public boolean login(MemberRequestDTO memberRequestDTO) {
        // MemberRepository의 인스턴스 메소드를 호출하도록 수정
        System.out.println("MemberServiceImpl.login");
        MemberRequestDTO loginMember = memberRepository.login(memberRequestDTO);
        String MEM_ID = memberRequestDTO.getMEM_ID();
        String MEM_PW = memberRequestDTO.getMEM_PW();
        System.out.println(MEM_PW);
        if (loginMember!=null){
            return true;
        }else
            return false;
    }

    /*아이디 유효성 검사*/
    @Override
    public boolean checkId(String MEM_ID) {

        MemberRequestDTO checkId = memberRepository.checkId(MEM_ID);
        System.out.println("checkId = " + checkId);
        if (checkId == null) {
            return false;
        } else
            return true;
    }
    /**
    회원가입*/
    @Override
    public boolean memberJoin(MemberRequestDTO memberRequestDTO) {
        if(memberRequestDTO .getMEM_PW()!= null){
            return true;
        }
        return false;
    }
    /*이메일 유효성 검사 */
    @Override
    public boolean checkEmail(String MEM_EMAIL) {
        MemberRequestDTO email =memberRepository.chekcEmail(MEM_EMAIL);
        if (email != null){
            return true;
        }else {
            return false;
        }
    }
    @Override
    public MemberRequestDTO processOAuthUser(String MEM_EMAIL, String MEM_ID) {
        return null;
    }
    /**
     * 아이디 찾기
     * */
    @Override
    public String lostId(MemberRequestDTO memberRequestDTO) {
        if (memberRequestDTO.getMEM_NAME() == null || memberRequestDTO.getMEM_NAME().isEmpty()) {
            return "이름을 입력해주세요.";
        }
        if (memberRequestDTO.getMEM_EMAIL() == null || memberRequestDTO.getMEM_EMAIL().isEmpty()) {
            return "이메일을 입력해주세요.";
        }
        String memberId = memberRepository.findMemberIdByNameAndEmail(memberRequestDTO.getMEM_NAME(), memberRequestDTO.getMEM_EMAIL());

        // 이름이나 이메일이 일치하지 않을 때의 처리
        if(memberId == null) {
            if(memberRepository.existsByMEM_NAME(memberRequestDTO.getMEM_NAME())
                    && !memberRepository.existsByMEM_EMAIL(memberRequestDTO.getMEM_EMAIL())) {
                return "이메일이 일치하지 않습니다.";
            } else if(!memberRepository.existsByMEM_NAME(memberRequestDTO.getMEM_NAME())
                    && memberRepository.existsByMEM_EMAIL(memberRequestDTO.getMEM_EMAIL())) {
                return "이름이 일치하지 않습니다.";
            } else {
                return "해당하는 사용자 정보를 찾을 수 없습니다.";
            }
        }
        return memberId ;
    }
    }


















