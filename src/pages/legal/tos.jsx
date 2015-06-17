var React = require('react/addons');
var Footer = require('../../components/footer/footer.jsx');

module.exports = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin
  ],
  render: function () {
    return (
      <div id="splash">
        <div id="masthead">
          <div className="inner">
            <div id="header">
              <a href="#/"><img src="./img/logo.png" width="200" height="53" alt="Webmaker" /></a>
            </div>
          </div>
        </div>

        <div id="mid">
          <div className="inner legal">
            <h1>Webmaker and teach.mozilla.org Terms of Use</h1>

            <h3>June 15, 2013</h3>

            <p>At Mozilla, we are committed to promoting choice and innovation on the web and helping users realize the full potential of the web. We created Webmaker and [teach.mozilla.org] (collectively, “Sites”) to improve web literacy, by enabling users to learn about web technologies by creating apps and submitting them for others to mash up. and providing resources for a community of educators and activists who want to teach digital skills through making.”</p>

            <p>Your use of the Sites is subject to these terms and conditions as well as any other policies linked to in these Terms or elsewhere on the Sites (we will refer to these collectively as the “Terms”).</p>

            <h2>Eligibility</h2>

            <p>By using the Sites, you agree that you are at least 18 years old or are acting with the consent and supervision of your parent; and you have full power, capacity, and authority to accept these Terms on behalf of yourself, or if applicable, your employer or other entity that you represent.</p>

            <h2>Modifications to the Terms</h2>

            <p>We reserve the right to change these Terms at our sole discretion, and if we do make material changes, we will attempt to notify you of those changes prior to those terms coming into effect.</p>

            <h2>Privacy</h2>

            <p>The Mozilla Websites, Communications & Cookies Privacy Notice describes how we handle information that we receive from you in connection with the Sites, such as contact details that you provide when you register for the Sites. The Privacy Notice also explains, for example, that we place certain cookies on our Websites and how you can opt-out.</p>

            <h2>Accounts</h2>

            <p>The Sites require you to register for an account in order to access certain features of the Sites such as submission of content. All the content you publish under your account, including all profile information (like your username), will be accessible publicly and may be viewed by others. You are responsible for all activities under your account.</p>

            <p>Your username will also provide you with a subdomain based on that username.</p>

            <p>You may not impersonate others with your username in a manner that does or is intended to mislead, confuse, or deceive others and we reserve the right to reclaim usernames on behalf of businesses or individuals that hold legal claim or trademark on those usernames. You may not buy or sell usernames or engage in squatting (creating usernames for the purpose of preventing others from using them).</p>

            <h2>Content Submissions</h2>

            <p>You may upload content, including text and images, as a part of the features of the Sites (“Submissions”). You acknowledge that as a part of the functionality of the Sites, some if not all of your Submissions may be re-used by others, and you agree to license all your Submissions under a Creative Commons Attribution Share-Alike 3.0 Unported license, or any later version. You represent and warrant that that you have all necessary rights and permissions to license your Submissions under a CC-BY-SA license and that the uses contemplated on the Sites will not infringe the proprietary or intellectual property rights of any third party.</p>

            <p>Mozilla does not require a direct license grant from you and will use the terms of the CC-BY-SA license in order to provide you with service.</p>

            <p>You understand and agree that Mozilla reserves the right, at its discretion, to review, modify, or remove any Submission that it deems objectionable or in violation of these Terms.</p>

            <h2>Clubs and Events</h2>

            <p>The Sites provide resources for users who want to arrange physical meetings at various venues, referred to on the Sites as Clubs and Events. These meetings are organized and managed by third parties independently of Mozilla.</p>

            <p>Except where we explicitly state otherwise, you acknowledge that we: (i) do not supervise or control the meetings or interactions between users (even if the Clubs or Events use the term “Mozilla” or “Moz” in the title or if they include members of the Mozilla community), (ii) are not involved in any way with physical transportation to or from meetings or with the actions of any individuals at those meetings, (iii) do not control users or have the ability to verify the true identity, age, nationality or other information of users, and (iv) do not control the quality, safety, morality, legality, truthfulness or accuracy of meetings or people attending them. We request that you exercise caution and good judgment when attending such meetings.</p>

            <h2>Copyright and Trademark Notices</h2>

            <p>To report copyright or trademark infringement, please visit <a target="_blank" href="https://www.mozilla.org/en-US/about/legal/report-abuse/">https://www.mozilla.org/en-US/about/legal/report-abuse/</a>.</p>

            <h2>Termination</h2>

            <p>The Terms will continue to apply until terminated by either you or Mozilla.</p>

            <p>You may end your agreement with Mozilla regarding the Sites at any time for any reason by discontinuing your use of the sites and, if applicable, deactivating your account.If you stop using the Sites without deactivating your account, your account may be deactivated due to prolonged inactivity.</p>

            <p>We may suspend or terminate your accounts or cease providing you with all or part of the Sites at any time for any reason, including, but not limited to, if we reasonably believe: (i) you have violated these Terms, (ii) you create risk or possible legal exposure for us; or (iii) our provision of the Sites to you is no longer commercially viable. We will make reasonable efforts to notify you by the email address associated with your account or the next time you attempt to access your account.</p>

            <p>In all such cases, the Terms shall terminate, except that the following sections shall continue to apply: Release and Indemnification, Disclaimer; Limitation of Liability, Governing Law, Miscellaneous.</p>

            <h2>General Representation and Warranty</h2>

            <p>You represent and warrant that your use of the Sites, including your Submissions, will comply with these Terms, the Mozilla Conditions of Use <a href="https://www.mozilla.org/en-US/about/legal/acceptable-use/" target="_blank">https://www.mozilla.org/en-US/about/legal/acceptable-use/</a>, and any other applicable policy or terms and conditions.</p>

            <h2>Release and Indemnification</h2>

            <p>You release Mozilla, its officers, employees, agents and successors from claims, demands and damages of every kind or nature arising out of or related to any disputes with other users, including with respect to any meetings you may wish to attend. You further waive any and all rights and benefits otherwise conferred by any statutory or non-statutory law of any jurisdiction that would purport to limit the scope of a release or waiver.</p>

            <p>You agree to defend, indemnify and hold harmless Mozilla, its contractors and its licensors, and their respective directors, officers, employees and agents, from and against any and all third party claims and expenses, including attorneys' fees, arising out of or related to your use of the Sites, including but not limited to your violation of any representation or warranty contained in these Terms.</p>

            <h2>Disclaimer; Limitation of Liability</h2>

            <p>EXCEPT AS OTHERWISE EXPRESSLY STATED, INCLUDING BUT NOT LIMITED TO IN A LICENSE OR OTHER AGREEMENT GOVERNING THE USE OF SPECIFIC CONTENT, ALL CONTENT LOCATED AT OR AVAILABLE FROM THE SITES IS PROVIDED "AS IS," AND MOZILLA, ITS CONTRACTORS AND ITS LICENSORS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE OR NON-INFRINGEMENT OF PROPRIETARY RIGHTS. WITHOUT LIMITING THE FOREGOING, MOZILLA, ITS CONTRACTORS AND ITS LICENSORS MAKE NO REPRESENTATION OR WARRANTY THAT CONTENT LOCATED ON THE SITES IS FREE FROM ERROR OR SUITABLE FOR ANY PURPOSE; NOR THAT THE USE OF SUCH CONTENT WILL NOT INFRINGE ANY THIRD PARTY COPYRIGHTS, TRADEMARKS OR OTHER INTELLECTUAL PROPERTY RIGHTS. YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD OR OTHERWISE OBTAIN CONTENT THROUGH MOZILLA'S WEBSITES AT YOUR OWN DISCRETION AND RISK, AND THAT MOZILLA, ITS CONTRACTORS AND ITS LICENSORS WILL HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR DATA THAT RESULTS FROM THE DOWNLOAD OR USE OF SUCH CONTENT.</p>

            <p>EXCEPT AS OTHERWISE EXPRESSLY STATED, INCLUDING BUT NOT LIMITED TO IN A LICENSE OR OTHER AGREEMENT GOVERNING THE USE OF SPECIFIC CONTENT, IN NO EVENT WILL MOZILLA, ITS CONTRACTORS OR ITS LICENSORS BE LIABLE TO YOU OR ANY OTHER PARTY FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, REGARDLESS OF THE BASIS OR NATURE OF THE CLAIM, RESULTING FROM ANY USE OF THE SITES, OR THE CONTENTS THEREOF OR OF ANY HYPERLINKED WEB SITE, INCLUDING WITHOUT LIMITATION ANY LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA OR OTHERWISE, EVEN IF MOZILLA, ITS CONTRACTORS OR ITS LICENSORS WERE EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

            <p>SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF LIABILITY FOR CERTAIN INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>

            <h2>Governing Law</h2>

            <p>These Terms shall be governed by the laws of the state of California, U.S.A., without regard to conflict of law principles. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within Santa Clara County, California for the purpose of litigating any claims or disputes arising out of the Sites or these Terms.</p>

            <h2>Miscellaneous</h2>

            <p>These Terms constitute the entire agreement between the parties with respect to the subject matter hereof, and supersede any prior versions of these Terms. These Terms shall not be construed to create a joint venture or partnership between the parties. Neither party shall be deemed to be an employee, agent, partner or legal representative of the other for any purpose and neither shall have any right, power or authority to create any obligation or responsibility on behalf of the other. If any portion of these Terms is held to be invalid or unenforceable, the remaining portions will remain in full force and effect. In the event of a conflict between a translated version of these Terms and the English language version, the English language version shall control.</p>

          </div>
        </div>

        <Footer/>
      </div>
    );
  }
});
