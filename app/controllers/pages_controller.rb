class PagesController < ApplicationController



  #  def checkout
  #   
  #     # get the credit card details submitted by the form
  #     token = params[:stripeToken]
  # 
  #     # set your secret key: remember to change this to your live secret key in production
  #     # see your keys here https://manage.stripe.com/account
  #     Stripe.api_key = "Vp2kU6UwYrSX2PM47jsxARw69pXQyuGO"
  # 
  #     # create a Customer
  #     customer = Stripe::Customer.create(
  #     :card => token,
  #     :description => "payinguser@example.com"
  #     )
  # 
  #     # charge the Customer instead of the card
  #     Stripe::Charge.create(
  #     :amount => 1000, # in cents
  #     :currency => "usd",
  #     :customer => customer.id
  #     )
  # 
  #     # save the customer ID in your database so you can use it later
  #     save_stripe_customer_id(user, customer.id)
  # 
  #     # later
  #     customer_id = get_stripe_customer_id(user)
  # 
  #     Stripe::Charge.create(
  #     :amount => 1500, # $15.00 this time
  #     :currency => "usd",
  #     :customer => customer_id
  #     )
  # 
  # end


  def info
    
  end
  
  def home
  end
  
  def albums
  end
  
  def registry
  end
  
  
  # GET /pages
  # GET /pages.json
  def index
    @pages = Page.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pages }
    end
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
    @page = Page.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/new
  # GET /pages/new.json
  def new
    @page = Page.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/1/edit
  def edit
    @page = Page.find(params[:id])
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(params[:page])

    respond_to do |format|
      if @page.save
        format.html { redirect_to @page, notice: 'Page was successfully created.' }
        format.json { render json: @page, status: :created, location: @page }
      else
        format.html { render action: "new" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pages/1
  # PUT /pages/1.json
  def update
    @page = Page.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page])
        format.html { redirect_to @page, notice: 'Page was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page = Page.find(params[:id])
    @page.destroy

    respond_to do |format|
      format.html { redirect_to pages_url }
      format.json { head :ok }
    end
  end
end
