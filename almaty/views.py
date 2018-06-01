from django.shortcuts import render, get_object_or_404, render_to_response, redirect
from django.contrib import auth
from django.utils import timezone
from .models import Place, Comment, Food
from django.contrib.auth.forms import UserCreationForm
from django.template.context_processors import csrf
from .forms import CommentForm


#from .forms import CommentForm
#from .models import Review

# Create your views here.
def base(request):
	return render(request, 'almaty/base.html', {})

def places(request):
	places = Place.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
	return render(request, 'almaty/index.html', {'places': places, 'username': auth.get_user(request).username})

def restorans(request):
	restorans = Place.objects.filter(place_type='ресторан')
	return render(request, 'almaty/restorans.html', {'restorans': restorans})

def relax(request):
	relaxes = Place.objects.filter(place_type='отдых')
	return render(request, 'almaty/relax.html', {'relaxes': relaxes})

def detail(request, pk):
	comment_form = CommentForm
	args = {}
	args.update(csrf(request))
	args['place'] = get_object_or_404(Place, pk=pk)
	args['comments'] = Comment.objects.filter(comm_place_id=pk)
	args['form'] = comment_form
	args['username'] = auth.get_user(request).username
	return render(request, 'almaty/detail.html', args)
	

def addcomment(request, pk):		
	args = {}
	args.update(csrf(request))
	if request.POST:
		form = CommentForm(request.POST)
		comm_text = request.POST.get('comm_text', '')
		comm_place = request.POST.get('comm_place', '')
		if form.is_valid():
			comment = form.save(commit=False)
			comment.comm_place = Place.objects.get(pk=pk)
			comment.auth = request.user
			form.save()
	return redirect('/place/%s/' % pk)


def contacts(request):
	return render(request, 'almaty/contacts.html', {})

def register(request):
	args = {}
	args.update(csrf(request))
	args['form'] = UserCreationForm()
	if request.POST:
		newuser_form = UserCreationForm(request.POST)
		if newuser_form.is_valid():
			newuser_form.save()
			newuser = auth.authenticate(username=newuser_form.cleaned_data['username'], password=newuser_form.cleaned_data['password2'])
			auth.login(request, newuser)
			return redirect('/')
		else:
			args['form'] = newuser_form
	return render_to_response('almaty/register.html', args)

def login(request):
	args = {}
	args.update(csrf(request))
	if request.POST:
		username = request.POST.get('username', '')
		password = request.POST.get('password', '')
		user = auth.authenticate(username=username, password=password)
		if user is not None:
			auth.login(request, user)
			return redirect('/')
		else:
			args['login_error'] = "No such username"
			return render_to_response('almaty/login.html', args)

	else: 
		return render_to_response('almaty/login.html', args)

def logout(request):
	auth.logout(request)
	return redirect("/")

def food(request):
	foods = Food.objects.all()
	return render(request, 'almaty/food.html', {'foods': foods, 'username': auth.get_user(request).username})