// AI招聘系统 - 全局JavaScript

// 工具函数
const Utils = {
    // 显示Toast提示
    showToast(message, type = 'success') {
        const container = document.querySelector('.toast-container') || this.createToastContainer();
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    },

    // 格式化日期
    formatDate(date) {
        const d = new Date(date);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    },

    // 格式化时间
    formatDateTime(date) {
        const d = new Date(date);
        return `${this.formatDate(d)} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    },

    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },

    // 生成唯一ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

// 模态框管理
const Modal = {
    open(modalId) {
        document.getElementById(modalId)?.classList.add('active');
    },

    close(modalId) {
        document.getElementById(modalId)?.classList.remove('active');
    },

    closeAll() {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    }
};

// 模拟AI简历解析
const AIResumeParser = {
    parse(resumeData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const analysis = {
                    score: Math.floor(Math.random() * 30) + 70,
                    strengths: [
                        '技术栈与岗位高度匹配',
                        '项目经验描述清晰',
                        '具备团队管理经验'
                    ],
                    weaknesses: [
                        '缺乏大型项目架构经验',
                        '某些技能描述不够具体'
                    ],
                    suggestions: [
                        '建议补充微服务相关项目经验',
                        '可以量化工作成果（如提升性能百分比）'
                    ],
                    extractedSkills: ['React', 'Vue', 'Node.js', 'Python', 'MySQL', 'Redis', 'Docker', 'Git'],
                    matchRate: Math.floor(Math.random() * 20) + 80,
                    riskLevel: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
                    riskPoints: [
                        '工作经历时间线存在轻微重叠',
                        '薪资期望略高于市场水平'
                    ]
                };
                resolve(analysis);
            }, 1500);
        });
    }
};

// 模拟AI人岗匹配
const AIMatcher = {
    match(resumeData, jobData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const score = Math.floor(Math.random() * 25) + 75;
                const breakdown = {
                    skills: Math.floor(Math.random() * 20) + 80,
                    experience: Math.floor(Math.random() * 20) + 75,
                    education: Math.floor(Math.random() * 15) + 85,
                    salary: Math.floor(Math.random() * 30) + 70
                };
                resolve({ score, breakdown });
            }, 1000);
        });
    }
};

// 模拟AI面试
const AIInterview = {
    questions: {
        common: [
            '请简单介绍一下你自己',
            '你最大的优点和缺点是什么？',
            '为什么想离开现在的公司？',
            '你对未来3-5年的职业规划是什么？',
            '你期望的薪资是多少？'
        ],
        technical: {
            '前端': [
                '解释一下Virtual DOM的工作原理',
                'React和Vue有什么区别？你更倾向于哪个？',
                '如何优化大型React应用的性能？',
                '解释一下闭包和作用域链',
                'CSS盒模型是什么？'
            ],
            '后端': [
                '如何设计一个高可用的系统？',
                '解释一下微服务架构的优缺点',
                '数据库索引的原理是什么？',
                '如何处理分布式事务？',
                'RESTful API设计原则有哪些？'
            ],
            '全栈': [
                '前后端分离的优缺点？',
                '如何保证API的安全性？',
                '解释一下OAuth2.0的工作流程',
                '如何实现实时通信？',
                '数据库优化有哪些常用方法？'
            ]
        }
    },

    getQuestions(position) {
        const category = Object.keys(this.questions.technical).find(key => 
            position.toLowerCase().includes(key.toLowerCase())
        ) || '全栈';
        return [...this.questions.common.slice(0, 3), ...this.questions.technical[category]];
    },

    evaluateAnswer(question, answer) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const scores = {
                    expression: Math.floor(Math.random() * 20) + 80,
                    logic: Math.floor(Math.random() * 20) + 75,
                    professional: Math.floor(Math.random() * 25) + 75,
                    stability: Math.floor(Math.random() * 15) + 85
                };
                const overall = Math.round(
                    scores.expression * 0.25 + 
                    scores.logic * 0.35 + 
                    scores.professional * 0.25 + 
                    scores.stability * 0.15
                );
                resolve({ scores, overall });
            }, 500);
        });
    },

    generateReport(interviewData) {
        return {
            overallScore: Math.floor(Math.random() * 15) + 85,
            strengths: [
                '表达清晰，逻辑性强',
                '技术基础扎实',
                '有良好的问题分析能力'
            ],
            weaknesses: [
                '某些回答可以更加具体',
                '缺乏深入的技术细节'
            ],
            recommendation: '建议进入下一轮面试',
            scores: {
                expression: Math.floor(Math.random() * 15) + 85,
                logic: Math.floor(Math.random() * 15) + 85,
                professional: Math.floor(Math.random() * 20) + 80,
                stability: Math.floor(Math.random() * 10) + 90
            }
        };
    }
};

// 数据存储（模拟LocalStorage）
const DataStore = {
    prefix: 'ai_recruitment_',

    set(key, value) {
        localStorage.setItem(this.prefix + key, JSON.stringify(value));
    },

    get(key) {
        const data = localStorage.getItem(this.prefix + key);
        return data ? JSON.parse(data) : null;
    },

    remove(key) {
        localStorage.removeItem(this.prefix + key);
    },

    clear() {
        Object.keys(localStorage)
            .filter(key => key.startsWith(this.prefix))
            .forEach(key => localStorage.removeItem(key));
    }
};

// 用户认证管理
const Auth = {
    currentUser: null,

    init() {
        this.currentUser = DataStore.get('currentUser');
        return this.currentUser;
    },

    login(phone, password, userType) {
        const users = DataStore.get(`users_${userType}`) || [];
        const user = users.find(u => u.phone === phone && u.password === password);
        if (user) {
            this.currentUser = user;
            DataStore.set('currentUser', user);
            Utils.showToast('登录成功！', 'success');
            return true;
        }
        Utils.showToast('手机号或密码错误', 'error');
        return false;
    },

    register(userData, userType) {
        const users = DataStore.get(`users_${userType}`) || [];
        if (users.find(u => u.phone === userData.phone)) {
            Utils.showToast('该手机号已注册', 'error');
            return false;
        }
        userData.id = Utils.generateId();
        userData.createdAt = new Date().toISOString();
        users.push(userData);
        DataStore.set(`users_${userType}`, users);
        Utils.showToast('注册成功！', 'success');
        return true;
    },

    logout() {
        this.currentUser = null;
        DataStore.remove('currentUser');
        Utils.showToast('已退出登录', 'success');
    },

    isLoggedIn() {
        return !!this.currentUser;
    }
};

// 简历管理
const ResumeManager = {
    getDefaultResume() {
        return {
            id: Utils.generateId(),
            name: '',
            phone: '',
            email: '',
            age: '',
            gender: '',
            education: '',
            school: '',
            workExperience: [],
            projectExperience: [],
            skills: [],
            selfEvaluation: '',
            expectedSalary: '',
            desiredPosition: '',
            desiredCity: ''
        };
    },

    save(resume) {
        const userId = Auth.currentUser?.id;
        if (!userId) return false;
        const resumes = DataStore.get(`resumes_${userId}`) || {};
        resumes[resume.id] = resume;
        DataStore.set(`resumes_${userId}`, resumes);
        return true;
    },

    get(userId = Auth.currentUser?.id) {
        if (!userId) return null;
        const resumes = DataStore.get(`resumes_${userId}`) || {};
        return Object.values(resumes)[0] || this.getDefaultResume();
    }
};

// 职位管理
const JobManager = {
    sampleJobs: [
        {
            id: 'job001',
            title: '高级前端开发工程师',
            company: '科技创新有限公司',
            companyLogo: '',
            city: '北京',
            salary: '25K-35K',
            experience: '3-5年',
            education: '本科',
            type: '全职',
            urgent: true,
            description: '负责公司核心产品的前端开发，参与技术选型和架构设计',
            requirements: [
                '精通React/Vue等主流框架',
                '3年以上前端开发经验',
                '熟悉Node.js后端开发',
                '有大型项目架构经验优先'
            ],
            benefits: ['五险一金', '带薪年假', '弹性工作', '年度旅游'],
            hrId: 'hr001',
            createdAt: '2026-04-15',
            views: 1234,
            applications: 45
        },
        {
            id: 'job002',
            title: 'Java后端开发工程师',
            company: '互联网科技集团',
            companyLogo: '',
            city: '上海',
            salary: '20K-30K',
            experience: '2-4年',
            education: '本科',
            type: '全职',
            urgent: false,
            description: '负责后端服务设计与实现，参与微服务架构改造',
            requirements: [
                '精通Java/Spring生态',
                '2年以上后端开发经验',
                '熟悉MySQL/Redis',
                '有微服务经验优先'
            ],
            benefits: ['六险一金', '股票期权', '下午茶', '健身房'],
            hrId: 'hr002',
            createdAt: '2026-04-18',
            views: 890,
            applications: 32
        },
        {
            id: 'job003',
            title: 'Python数据工程师',
            company: '数据智能科技',
            companyLogo: '',
            city: '深圳',
            salary: '22K-35K',
            experience: '3-5年',
            education: '硕士',
            type: '全职',
            urgent: true,
            description: '负责数据平台建设，进行大数据处理和分析',
            requirements: [
                '精通Python数据分析',
                '熟悉Hadoop/Spark',
                '3年以上相关经验',
                '统计或数学背景优先'
            ],
            benefits: ['七险一金', '年度调薪', '技术分享', '培训机会'],
            hrId: 'hr003',
            createdAt: '2026-04-20',
            views: 567,
            applications: 23
        },
        {
            id: 'job004',
            title: 'UI/UX设计师',
            company: '创意设计工作室',
            companyLogo: '',
            city: '北京',
            salary: '15K-25K',
            experience: '1-3年',
            education: '本科',
            type: '全职',
            urgent: false,
            description: '负责产品UI/UX设计，提升用户体验',
            requirements: [
                '精通Figma/Sketch',
                '1年以上UI设计经验',
                '有移动端设计经验',
                '良好的审美和创意能力'
            ],
            benefits: ['五险一金', '项目奖金', '弹性工作', '出国团建'],
            hrId: 'hr004',
            createdAt: '2026-04-19',
            views: 432,
            applications: 18
        },
        {
            id: 'job005',
            title: '前端开发实习生',
            company: '科技创新有限公司',
            companyLogo: '',
            city: '北京',
            salary: '3K-5K',
            experience: '在校生',
            education: '本科',
            type: '实习',
            urgent: false,
            description: '参与前端项目开发，学习主流技术栈',
            requirements: [
                '计算机相关专业',
                '熟悉HTML/CSS/JS',
                '了解React/Vue',
                '实习时间3个月以上'
            ],
            benefits: ['导师带教', '转正机会', '餐补', '交通补贴'],
            hrId: 'hr001',
            createdAt: '2026-04-21',
            views: 234,
            applications: 56
        }
    ],

    init() {
        if (!DataStore.get('jobs')) {
            DataStore.set('jobs', this.sampleJobs);
        }
    },

    getAll(filters = {}) {
        let jobs = DataStore.get('jobs') || [];
        
        if (filters.keyword) {
            const kw = filters.keyword.toLowerCase();
            jobs = jobs.filter(j => 
                j.title.toLowerCase().includes(kw) || 
                j.company.toLowerCase().includes(kw) ||
                j.description.toLowerCase().includes(kw)
            );
        }
        if (filters.city && filters.city !== 'all') {
            jobs = jobs.filter(j => j.city === filters.city);
        }
        if (filters.type && filters.type !== 'all') {
            jobs = jobs.filter(j => j.type === filters.type);
        }
        if (filters.experience && filters.experience !== 'all') {
            jobs = jobs.filter(j => j.experience.includes(filters.experience));
        }
        
        return jobs;
    },

    getById(id) {
        const jobs = DataStore.get('jobs') || [];
        return jobs.find(j => j.id === id);
    },

    create(job) {
        job.id = Utils.generateId();
        job.createdAt = Utils.formatDate(new Date());
        job.views = 0;
        job.applications = 0;
        const jobs = DataStore.get('jobs') || [];
        jobs.unshift(job);
        DataStore.set('jobs', jobs);
        return job;
    },

    update(id, updates) {
        const jobs = DataStore.get('jobs') || [];
        const index = jobs.findIndex(j => j.id === id);
        if (index !== -1) {
            jobs[index] = { ...jobs[index], ...updates };
            DataStore.set('jobs', jobs);
            return jobs[index];
        }
        return null;
    },

    delete(id) {
        const jobs = DataStore.get('jobs') || [];
        const filtered = jobs.filter(j => j.id !== id);
        DataStore.set('jobs', filtered);
    }
};

// 投递管理
const ApplicationManager = {
    getForCandidate(userId = Auth.currentUser?.id) {
        if (!userId) return [];
        return DataStore.get(`applications_${userId}`) || [];
    },

    getForJob(jobId) {
        const allApplications = DataStore.get('all_applications') || [];
        return allApplications.filter(a => a.jobId === jobId);
    },

    getForHR(hrId = Auth.currentUser?.id) {
        if (!hrId) return [];
        const allApplications = DataStore.get('all_applications') || [];
        return allApplications.filter(a => a.hrId === hrId);
    },

    apply(application) {
        application.id = Utils.generateId();
        application.status = 'pending';
        application.appliedAt = new Date().toISOString();
        
        const candidateApplications = this.getForCandidate();
        candidateApplications.push(application);
        DataStore.set(`applications_${Auth.currentUser.id}`, candidateApplications);
        
        const allApplications = DataStore.get('all_applications') || [];
        allApplications.push(application);
        DataStore.set('all_applications', allApplications);
        
        const job = JobManager.getById(application.jobId);
        if (job) {
            JobManager.update(application.jobId, { applications: job.applications + 1 });
        }
        
        Utils.showToast('投递成功！', 'success');
        return application;
    },

    updateStatus(applicationId, status) {
        let allApplications = DataStore.get('all_applications') || [];
        const index = allApplications.findIndex(a => a.id === applicationId);
        if (index !== -1) {
            allApplications[index].status = status;
            allApplications[index].updatedAt = new Date().toISOString();
            DataStore.set('all_applications', allApplications);
            
            const candidateId = allApplications[index].candidateId;
            const candidateApps = this.getForCandidate(candidateId);
            const cIndex = candidateApps.findIndex(a => a.id === applicationId);
            if (cIndex !== -1) {
                candidateApps[cIndex].status = status;
                DataStore.set(`applications_${candidateId}`, candidateApps);
            }
        }
    }
};

// 聊天管理
const ChatManager = {
    getMessages(chatId) {
        return DataStore.get(`chat_${chatId}`) || [];
    },

    sendMessage(chatId, message, sender) {
        const messages = this.getMessages(chatId);
        const newMessage = {
            id: Utils.generateId(),
            content: message,
            sender,
            timestamp: new Date().toISOString()
        };
        messages.push(newMessage);
        DataStore.set(`chat_${chatId}`, messages);
        return newMessage;
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    JobManager.init();
    initTestAccounts();
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                Modal.close(this.id);
            }
        });
    });
    
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal?.classList.remove('active');
        });
    });
});

// 初始化测试账号
function initTestAccounts() {
    // 检查是否已有用户数据
    if (!DataStore.get('users_candidate')) {
        const candidateUsers = [
            {
                id: 'candidate001',
                phone: '13800138001',
                password: '123456',
                name: '张三',
                userType: 'candidate',
                createdAt: new Date().toISOString()
            }
        ];
        DataStore.set('users_candidate', candidateUsers);
    }
    
    if (!DataStore.get('users_hr')) {
        const hrUsers = [
            {
                id: 'hr001',
                phone: '13900139001',
                password: '123456',
                name: '企业HR',
                userType: 'hr',
                createdAt: new Date().toISOString()
            }
        ];
        DataStore.set('users_hr', hrUsers);
    }
}

// 导出全局对象
window.Utils = Utils;
window.Modal = Modal;
window.AIResumeParser = AIResumeParser;
window.AIMatcher = AIMatcher;
window.AIInterview = AIInterview;
window.DataStore = DataStore;
window.Auth = Auth;
window.ResumeManager = ResumeManager;
window.JobManager = JobManager;
window.ApplicationManager = ApplicationManager;
window.ChatManager = ChatManager;