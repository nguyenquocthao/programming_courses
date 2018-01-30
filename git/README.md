# README

## 1. What is Git?
- Git is Version Control System (VCS). VCS is also called Source Code Management Tool, in short SCM
- Git is Distributed Version Control: everybody have their own repository stored in local machine, edit there, in addition a center repository stored in server for sync
- Git is mainly used for managing text files; can view versions, compare them, restore to older versions; merge versions; Git is less useful for non-text files

## 2. Installing Git
- download at www.git-scm.com
- `git config [--system] [--global] --list`: --system -> view config of all users; --global -> view config of this user; else -> view config of this repository
- Common config: user.name, user.email, core.editor, color.ui
- `ls [-la] [path]`: view files/folders in *path*, --la -> list all file (. files are hidden files)
- `touch <file>`: create empty file
- `notepad <file>`: create/edit file using notepad; Save as, choose all file (*) to prevent adding .txt to end file name.
- `cat .git/config`
- `git help <cmd>`: (Windows) open html file, show usage of <cmd>
- git log too long -> press b for backward, f or space for forward, q for quit

## 3. Getting started
- `git init [<folder>]`: make *folder* git repository, default current folder; do not add or commit files available in folder
- `cd <path>`: go to *path*
- git files are stored in folder .git
- `git add [<file-name>] [.]`: add *file-name* or all file from working directory to staging index.
- `git commit -m <message>`: move edits from staging index to repository, leave *message* describing info about this commit. commit message should be descriptive. Can use text editor to write commit message.
- `git log`: view commits made. Option: --oneline, -<number> or -n <number>, <branch-name>, --all, --decorate

## 4. Git Concepts and Architecture
- 3 trees: repository, staging index, working
- hash value SHA-1: 40 character hexadecimal string. Changing the data -> change change sets -> change hash value. Can use some of first hash values (about 8-10 in small project) to represent commits.
- HEAD pointer: pointer to the latest commit; parent of HEAD is the second latest commits... When making commits, HEAD point to new commit, parent of new commit is old commit. 

## 5. Making changes to files
- `git status`: view changes among working directory, staging index and repository
- `git add [<file-name>] [.]`: add *file-name* or all file from working directory to staging index. `git add .` also remove deleted file
- `git rm [<file-name>]`: remove *file-name* from staging index and working directory, not saved in recycle bin.
- `git commit -m <message>`: move edits from staging index to repository, leave *message* describing info about this commit. commit message should be descriptive. Can use text editor to write commit message.
- changes need `git add` or `git rm` to be present in staging index. Difference working directory -> staging index is red; staging index -> repository is green
- `git diff [<path>]`: see changes staging index -> working directory about *path*. green is added, red is deleted.
- `git diff --cached/--staged [<commit>] [<path>]`: see changes *commit* -> staging index about *path*. Default *commit* is HEAD, *path* is working directory
- `git diff [<commit>] [<path>]`: *commit* -> working directory
- `git diff [<commit1>] [<commit2>] [<path>]`: changes *commit1* -> *commit2* about *path*
- git diff option: --summary, --name-only, --name-status, --color-words
- `git mv <source> <destination>`: use for move and rename

## 6. Using Git with real project
- In Windows, can use Sublime Text to find & replace in a folder.

## 7. Undoing changes
- `git checkout-index [-f] [-a] [<file>]`: copy staging index -> working directory; do not overwrite existing files, to overwrite use -f. Copy *file* or all file if using -a. If no *file* or -a, do nothing
- `git checkout [--] [<file>]`: copy staging index -> working directory in *file*. *file* can use regular expression such as `*.*` for all files. Use -- to prevent checkout branch in case branch and file/folder has the same name.
- `git reset [<commit>] [--] [<path>]`: reset from *commit* repository to staging index in *path*. Default *commit* is HEAD, *path* is working directory.
- git reset options: --soft -> only change repository; --mixed (default) -> change repository & staging index; --hard -> change all 3 trees
- `git commit --amend`: make change to current commit
- `git config --global core.editor notepad`: when typing git commit, edit commit message in notepad
- `git checkout <commit>`: detach HEAD to *commit* in a new branch, change staging index and working directory.
- `git revert <commit>`: revert to the repo, index, working dir before *commit* is made (a commit before *commit*). Need `git status` show no difference. When executing, edit message for revert and then commit (add new commit)
- `git clean [-d] [-n] [-f]`: remove untracked files, staging index -> working directory. -n or --dry-run -> only show what will be done; --f -> force delete files; --d: delete folder

## 8. Ignore files
- Ignore files: changes made to files isn't in commit.
- To ignore files, add file names in *project*/.gitignore. Can use regular expression. Git automatically ignore empty directory
- Rule: * ? [abc] [0-9]; ! -> not ignore. # at start line is comment. Ignore all files in directory using trailing slack / 
- Usually ignore: .zip, .gz, image, log, databases, operating system generating files, user assets
- `git config --global core.excludesfile <path>`: ignore files user-level. <path> stored file names to ignore
- `git add -f <file>`: forcefully add ignored file to staging index
- `git rm --cached <file>`: remove file repository -> staging index, untrack file so can ignore

## 9. Navigating the Commit Tree
- tree-ish: something referencs part of the tree
- <commit>^, <commit>~, <commit>~1: parent commit. *commit* can be HEAD, <branch-name>, <SHA>
- <commit>^^, ~2
- `git ls-tree <tree-ish> [<path>]`: list content (files, folders) of a tree.
- git log options: --oneline, -<number>, --since=<time>, --until=<time> (time: 'yyyy-mm-dd', '2 weeks ago', 3.days), --author=<author>, --grep=<re> (global regular expression), <cm1>..<cm2>, <path>, -p (patch option, see changes), --stat, --summary, --format=[oneline|short|medium|email...], --graph. Normally --oneline --graph --all --decorate
- `git show <object>`: show 1 or more objects (blobs, trees, tags, commits) (commit -> same as diff). Must pass SHA or some reference, can't be file name. Options: --format=<..>.
- `git diff <commit> [<path>]`: difference *commit* -> working . Option: --stat, --summary, -b, --ignore-all-space.

## 10. Branching
- Branches are used to try new ideas, isolate features,
- `git branch [-r] [-a]`: view branches. -r view remote branch, -a view all branch
- `git branch <branch-name> [<parent-branch>]`: create new branch *branch-name* from *parent-branch*
- `pwd`: view path of current folder
- `git checkout <branch-name`: change to branch; staging index and working dir also change. Working dir, staging index need to clean
- `git checkout -b <branch-name>`: create and checkout new branch
- `git diff <b1>..<b2>`: compare branches b1 -> b2
- git branch options: --merged [<branch-name>] -> see all branches completely in *branch-name*; -m/--move [<old-name>] <new-1name>-> rename branch, default is current branch; -d/--delete <branch-name> -> delete merged branch; -D -> forcefully delete
- show branch on command line: Windows cmd always show
- `export PS1=<format>`: show in command line; $(__git_ps1 "(%s)") -> branch name
- `export PS1='\W$(_git_ps1 "(%s)") > '`: show branch in command line.
- To save format: edit in .bash_profile (Mac)

## 11. Merging Branches
- `git merge <branch-name>`: merge *branch-name* into current branch. If branch-name completely contain current branch, do fast-forward merge; else recursive-merge and commit.
- git merge option: --abort -> abort merge process, -e/--edit to edit merge message, --no-ff to commit even when fast-forward, --ff-only only merge when fast-forward
- merge conflict usually happens when 2 branch edit the same lines in a file.
- `git mergetool`: show tools for merging 
- reduce merge conflicts: keep line short, keep commits small & focused, beware stray edits to whitespace, merge often, track changes to master
- solve merge confict: edit in conflicting files, then add and commit

## 12. Stashing changes
- stash: store changes temporarily without having to commit, is a snapshot of changes. Stash is stack, independent with repo, can access when changing branch
- `git stash save <message>`: save changes in working directory to stash, restore staging index and working dir
- `git stash list`: list things in stash
- `git stash show [-p] stash@{<number>}`: briefly show changes in a stash. -p show difference
- `git stash pop stash@{<number>}`: apply & delete that stash
- `git stash apply stash@{<number>}`: apply that stash
- `git stash clear`: clear all stashes
- `git stash drop [<stash>]`: remove *stash* or the latest one. id of other stashes auto-change

## 13. Remotes
- remote, master, origin/master have the same SHA or commit IDs refering
- remote: Git repository stored on server, other people can see
- origin/master: Git repository stored on local machine, reference to remote server branch, try to stay and sync with that. Can't checkout
- push: master -> remote -> origin/master
- fetch: remote -> origin/master
- merge: origin/master -> master
- git remote process: make change in repository -> commit, fetch -> merge -> push
- fetch often to stay in sync
- github: nguyenquocthao
- `git remote [-v]`: list all remote repository, -v for showing urls
- `git remote add <remote-name> <url>`: create a repository *remote-name* linked to *url*
- `git fetch <remote-name>`: fetch from online repository to *remote-name* on computer
- `git push -u <remote-name> <branch-name>`: push commit from *branch-name* to *remote-name* in the server,  -u: *branch-name* is set up to track *branch-name* from *remote-name*, so can use `git pull` to fetch + merge; usually have to fetch + merge or pull before push to avoid conflict because push is merge fast-forward in server
- `git push`: push current branch to online if have upstream branch
- `git branch [-r] [-a]`: -r: remote; -a: all
- `git clone <url> [directory-name]`: clone remote repository to current folder, named *directory-name*, set auto-tracking to can run `git pull`
- `git remote show <remote-name>`: see information about a remote
- `git remote rename <old-name> <new-name>`
- `git remote remove/rm <remote-name>`
- upstream branch: when set, can use git push
- `git merge <remote-name>/<branch-name>`: merge *branch-name* in repository *remote-name* to current branch. Usually fetch then merge
- `git branch <branch-name1> <remote-name>/<branch-name2>`: create branch *branch-name1* to track remote branch *branch-name2* from *remote-name*
- `git push <remote-name> :<branch-name>`: delete *branch-name* in *remote-name* in server and remote repository
- `git push <remote-name> --delete <branch-name>`: delete *branch-name* in *remote-name* in server and remote repository
- To reset commit pushed to remote: `git stash save <msg>`, `git reset <commit>`, `git push -f`

### Collaborator
- Add collaborator to read & write: in github page, click Settings -> Collaborators -> type username -> Add collaborator
- Open source: everyone can read, but a limited number of people can write
- Issues: post about the problem or the feature.
- Fork: create own project on own github, can write
- Pull request: tell other about your changes; people can accept changes and incorporate into main project.
- Common workflow: 
	- checkout master, fetch, merge -> to have updated master branch
	- checkout -b, edit, add, commit -> start edit on new branch; or
	- checkout -b, log, show, edit, add, commit -> start edit on available branch
	- fetch, push -u -> push the latest into online repository
- To merge to master when branch is complete: git checkout master -> fetch -> merge origin/master -> merge branch -> push

## 14.Tools and next steps
- Set up alias: `git config --global alias.<alias-name> <keyword>`
- Git hosting companies: github, bitbucket, gitorious
- Git self-host: Gitosis, Gitolite

