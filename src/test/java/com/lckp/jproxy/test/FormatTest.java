/**
 * @Title: FormatTest.java
 * @version V1.0
 */
package com.lckp.jproxy.test;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.util.Arrays;

import com.lckp.jproxy.util.FormatUtil;

/**
 * @className: FormatTest
 * @description: 
 * @date 2022年6月11日
 * @author LuckyPuppy514
 */
public class FormatTest {
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void main(String[] args) {	
		String[] titles = {	
				"[悠哈璃羽字幕社] [RPG不动产_RPG Fudousan] [06] [x264 1080p] [CHS]",
				"[悠哈璃羽字幕社] [RPG不动产_RPG Fudousan] [05] [x264 1080p] [CHS]",
				"【千夏字幕组】【测不准的阿波连同学 / 不会拿捏距离的阿波连同学_Aharen-san wa Hakarenai】[第09话][1080p_AVC][繁体]",
				"[动漫国字幕组&LoliHouse] Spy x Family / 间谍过家家 - 07 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]",
				"【幻樱字幕组】【4月新番】【间谍过家家 / 间谍家家酒 SPY×FAMILY】【09】【BIG5_MP4】【1280X720】",
				"[猎户不鸽发布组] 社畜小姐想被幽灵幼女治愈。 Shachiku-san wa Youjo Yuurei ni Iyasaretai [10] [1080p+] [简中] [网盘] [2022年4月番]",
				"[ANi] RPG Real Estate - RPG 不動產（僅限港澳台地區） - 08 [1080P][Bilibili][WEB-DL][AAC AVC][CHT CHS][MP4]",
				"[ANi] The Rising of the Shield Hero S2 - 盾之勇者成名录 第二季 - 09 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]",
				"[ANi] Skeleton Knight in Another World - 骸骨騎士大人異世界冒險中[01][1080P][Baha][WEB-DL][AAC AVC][MP4]",
				"[NC-Raws] 测不准的阿波连同学 / Aharen-san wa Hakarenai - 11 (B-Global 3840x2160 HEVC AAC MKV)",
				"[猎户随缘发布组] 女忍者椿的心事 Kunoichi Tsubaki no Mune no Uchi [09] [1080p] [简中内封] [2022年4月番]"
		};
		
		String[] rules = {
				"{\\[悠哈璃羽字幕社\\] \\[(.*)_(.*)\\] \\[(\\d+)\\](.*)}:{[悠哈璃羽字幕社] $2 $3$4}",
				"{【千夏字幕组】【(.*)_(.*)】\\[第(.*)话\\](.*)}:{[千夏字幕组] $2 $3 $4}",
				"{\\[(.*)&LoliHouse\\] (.*) / ([\\u4E00-\\u9FA5]+) - (.*) }:{[$1&LoliHouse] $3 / $2 $4}",
				"{【幻樱字幕组】【(.*)】【([^a-zA-Z]*)([a-zA-Z].*)】【(\\d+)】【([^【】]*)】【([^【】]*)】.*}:{[幻樱字幕组] $2 / $3 $4 [$5][$6]}",
				"{\\[猎户不鸽发布组\\]( [\\u4E00-\\u9FA5]+[。|？|！]* )(.*) \\[(\\d*)\\](.*)}:{[猎户不鸽发布组] $1/ $2 $3$4}",
				"{\\[ANi\\] (.*) - (.*)\\s*[-|\\[]\\s*(\\d+)[ \\]](.+)}:{$1 $3 $4}",
				"{\\[NC-Raws\\] ([\\u4E00-\\u9FA5 。？！]+) \\/ (.*) - (\\d*)(.*)}:{[NC-Raws] $1 / $2 $3$4 [简中\\]}",
				"{\\[猎户随缘发布组\\] ([\\u4E00-\\u9FA5 。？！]+) (.*) \\[(\\d*)\\](.*)}:{[猎户随缘发布组] $1 / $2 $3$4}"
		};
		
		List<String> ruleList = new ArrayList(Arrays.asList(rules));
		
		for(String title: titles) {
			System.out.println("原标题：" + title);
			System.out.println("格式化：" + FormatUtil.accurateFormat(title, ruleList));
			System.out.println();
		}
	}
}
